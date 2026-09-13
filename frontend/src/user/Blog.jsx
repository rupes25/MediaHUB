import Navbar from "../components/Navbar"


const Blog = () => {
  return (
    <div>
        <Navbar/>
        <div className="fullBlogSection">
            {/* yaha pe image show hoga lekin slide wise total 5 image honge aur wo scroll hote rahenge  horizontally */}

            <p>Full blog content</p>
        </div>
      
    </div>
  )
}

export default Blog
