const userModel = require('../models/authentication.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

function createToken(user){
     return jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"});
}

const cookieOptions = {
    httpOnly:true,
    samesite:"strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000
}


async function registerUser(req,res){
    const{fullName,email,username,dateOfBirth,password} = req.body;

    //check kro ki ye saari values aarhi hai ya nhi?
    if(typeof fullName !== 'string' || typeof email !== 'string'|| typeof password !== 'string'|| typeof username !== 'string' || typeof dateOfBirth !== 'Date'
        || !fullName.trim() || !email.trim() || !password.trim() || username.trim()
     )
     return res.status(404).json({message:"All fields are required in string format except date of birth"})

    try{
        //agar ye sb kuch mil rha hai to check kro ki email ya  username se phle hi koi user exist to nhi kr rha hai ?
    const normalizedEmail = email.toLowerCase();
    const userEmail = await userModel.findOne({email:normalizedEmail})


    const userUsername = await userModel.findOne({username})

    if(userEmail || userUsername){
        return res.status(400).json({message:"User already exists"})
    }

    // nhi to password ko hash krke store kro
    const hashedPassword = bcrypt.hash(password,10)

    // fr user create kro
    const user = await userModel.create({
        fullName,
        email:normalizedEmail,
        username,
        dateOfBirth,
        password:hashedPassword
    });

    //fr token create kro
    const token = createToken(user);

    // fr token ko cookie me send kro
    res.cookie("token",token,cookieOptions)

    //fr response send kro
    return res.status(200).json({
        message:"User registered successfully."
    })

    }
    catch(err){
        if(err.code === 11000){
            return res.status(409).json({message:"User already exists with this email or username."})
        }
        return res.status(500).json({message:"Internal server error."})
    }

}

async function loginUser(req,res) {
    const {email,username,password} = req.body
    
    // check kro ki ye sb aarhe hai ya nhi ?
    if(typeof email !== 'string'|| typeof password !== 'string'|| typeof username !== 'string' || !email.trim() || !password.trim() || username.trim())
     return res.status(404).json({message:"Email or username with password is required."})
    
    // check kro ki is username or email se koi user exist to nhi kr rha ?
    const normalizedEmail = email.toLowerCase();
    const userEmail = await userModel.findOne({email:normalizedEmail})


    const userUsername = await userModel.findOne({username})

    if(!userEmail || !userUsername){
        return res.status(400).json({message:"Invalid login credentials."})
    }

    //aur agar hai to password ko compare kro.
    const comparePassword = await bcrypt.compare(password,)
}




module.exports = {registerUser}