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
    if(typeof fullName !== 'string' || typeof email !== 'string'|| typeof password !== 'string'|| typeof username !== 'string' || typeof dateOfBirth !== 'string'
        || !fullName.trim() || !email.trim() || !password.trim() || !username.trim() || !dateOfBirth.trim()
     )
     return res.status(404).json({message:"All fields are required in string format except date of birth"})

    try{
        //agar ye sb kuch mil rha hai to check kro ki email ya  username se phle hi koi user exist to nhi kr rha hai ?
    const normalizedEmail = email.toLowerCase();
    const userEmail = await userModel.findOne({email:normalizedEmail})


    const normalizedUsername = username.toLowerCase();
    const userUsername = await userModel.findOne({username:normalizedUsername})

    if(userEmail || userUsername){
        return res.status(400).json({message:"User already exists"})
    }

    // nhi to password ko hash krke store kro
    const hashedPassword = await bcrypt.hash(password,10)

    // fr user create kro
    const user = await userModel.create({
        fullName,
        email:normalizedEmail,
        username:normalizedUsername,
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
    const {usernameOrEmail,password} = req.body
    
    // check kro ki ye sb aarhe hai ya nhi ?
    if(typeof usernameOrEmail !== 'string'|| typeof password !== 'string' || !usernameOrEmail.trim() || !password.trim())
     return res.status(404).json({message:"Email or username with password is required."})
    
   try{
     // check kro ki is username or email se koi user exist to nhi kr rha ?
     let user;
    if(usernameOrEmail.includes('@')){
        const normalizedEmail = usernameOrEmail.toLowerCase();
        user = await userModel.findOne({email:normalizedEmail})
    }

    if(!user){
        const normalizedUsername = usernameOrEmail.toLowerCase();
        user = await userModel.findOne({username:normalizedUsername})
    }

    // agar email and username nhi mile to
    if(!user){
        return res.status(404).json({message:"Invalid login credentials"})
    }

    // agr user mil gaya hai to password compare kro
    const validPassword = await bcrypt.compare(password,user.password);

    if(!validPassword){
        return res.status(404).json({message:"Invalid login credentials"})
    }

    //agar sb shi hai to fr token send kro
    const token = createToken(user);

    res.cookie("token",token,cookieOptions);

    return res.status(200).json({
        message:"Login successful.",
        user:{
            id:user._id,
            email:user.email,
            username:user.username

        }
    })
   }
   catch(err){
    return res.status(500).json({message:"Internal server error."})
   }
}

async function logoutUser(req,res){
    try{
        res.clearCookie("token",{
            ...clearOptions,
            maxAge:undefined,
            expires:new Date(0),
        })
        return res.status(200).json({message:"Logout successful"})
    }
     catch (err) {

        return res.status(500).json({
            message: "Internal server error"
        });
}
}


module.exports = {registerUser,loginUser,logoutUser}