import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import "../css/userCSS/ManageBlog.css";

const ManageBlog = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      title: "The Art of Building Better Digital Experiences",
      description:
        "Explore how thoughtful design, technology and storytelling come together to create meaningful digital experiences.",
      author: "Rupesh",
      category: "Technology",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Understanding Cybersecurity as a Developer",
      description:
        "Important security concepts every modern developer should understand before shipping applications.",
      author: "Rupesh",
      category: "Cybersecurity",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      title: "Finding Inspiration While Travelling",
      description:
        "Sometimes stepping away from the screen is exactly what you need to discover your next great idea.",
      author: "Rupesh",
      category: "Travel",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "The Future of Technology",
      description:
        "A look at how modern technology is changing the way we create, work and communicate.",
      author: "Rupesh",
      category: "Technology",
    },
  ];

  const handleViewBlog = (id) => {
    console.log("View blog:", id);

    // navigate(`/blogs/${id}`);
  };

  return (
    <div className="manageBlogPage">

      <Navbar />

      <main className="manageBlogContainer">

        {/* =========================
            HERO
        ========================= */}

        <section className="manageHero">

          <div className="manageHeroContent">

            <span className="manageEyebrow">
              MEDIAHUB · YOUR WORKSPACE
            </span>

            <h1>
              Manage your
              <span> stories.</span>
            </h1>

            <p>
              View, organize and manage everything you've published
              on MediaHUB from one place.
            </p>

          </div>


          <button className="createBlogBtn">
            <span>+</span>
            Create new blog
          </button>

        </section>


        {/* =========================
            STATS
        ========================= */}

        <section className="manageStats">

          <div className="manageStatCard">
            <span className="statIcon">01</span>

            <div>
              <strong>{blogs.length}</strong>
              <p>Total blogs</p>
            </div>
          </div>


          <div className="manageStatCard">
            <span className="statIcon">02</span>

            <div>
              <strong>3</strong>
              <p>Published</p>
            </div>
          </div>


          <div className="manageStatCard">
            <span className="statIcon">03</span>

            <div>
              <strong>12.4K</strong>
              <p>Total views</p>
            </div>
          </div>


          <div className="manageStatCard">
            <span className="statIcon">04</span>

            <div>
              <strong>824</strong>
              <p>Total likes</p>
            </div>
          </div>

        </section>


        {/* =========================
            BLOG SECTION
        ========================= */}

        <section className="userBlogsSection">

          <div className="manageSectionHeader">

            <div>
              <span className="sectionKicker">
                YOUR CONTENT
              </span>

              <h2>
                Your blogs
              </h2>

              <p>
                Manage and revisit the stories you've created.
              </p>
            </div>


            <div className="blogCount">
              {blogs.length} stories
            </div>

          </div>


          {/* Horizontal blog scroll */}

          <div className="manageBlogScroll">

            <div className="userTotalBlog">

              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  author={blog.author}
                  category={blog.category}
                  onClick={() => handleViewBlog(blog.id)}
                />
              ))}

            </div>

          </div>


          <div className="manageScrollHint">
            <span className="hintLine"></span>
            Scroll horizontally to view more
            <span className="hintArrow">→</span>
          </div>

        </section>


        {/* =========================
            MANAGEMENT NOTE
        ========================= */}

        <section className="manageInfo">

          <div className="infoIcon">
            ✦
          </div>

          <div>
            <h3>
              Keep your content organized
            </h3>

            <p>
              From here you'll be able to edit your blogs, update
              images, manage visibility and delete content you no
              longer want to publish.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
};

export default ManageBlog;