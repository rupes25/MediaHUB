import BlogCard from "../components/BlogCard";
import "../css/userCSS/Feed.css";

const Feed = () => {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      title: "The Art of Building Better Digital Experiences",
      description:
        "Explore how thoughtful design, technology and storytelling come together to create meaningful digital experiences.",
      author: "Rupesh",
      category: "Technology",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "What Every Developer Should Know About Security",
      description:
        "A practical look at the security concepts developers should understand before shipping modern web applications.",
      author: "Alex Morgan",
      category: "Cybersecurity",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      title: "Finding Inspiration While Travelling",
      description:
        "Sometimes stepping away from the screen is exactly what you need to discover your next great idea.",
      author: "Sarah",
      category: "Travel",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "The Future of Technology Is Already Here",
      description:
        "From artificial intelligence to connected systems, technology is changing how we work and create.",
      author: "David",
      category: "Technology",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      title: "Lessons I Learned From Building My First Product",
      description:
        "A collection of practical lessons, mistakes and insights from turning an idea into a working product.",
      author: "John",
      category: "Personal",
    },
  ];

  const handleViewBlog = (id) => {
    console.log("Opening blog:", id);

    // Later:
    // navigate(`/blogs/${id}`);
  };

  return (
    <main className="feedPage">

      {/* Background decoration */}
      <div className="feedGlow feedGlowOne"></div>
      <div className="feedGlow feedGlowTwo"></div>

      {/* =========================
          HERO
      ========================= */}

      <section className="feedHero">

        <div className="feedHeroContent">

          <div className="feedEyebrow">
            <span className="eyebrowDot"></span>
            MEDIAHUB · COMMUNITY STORIES
          </div>

          <h1>
            Discover ideas.
            <br />
            <span>Read something meaningful.</span>
          </h1>

          <p>
            Explore stories, experiences and ideas shared by creators
            across the MediaHUB community.
          </p>

        </div>

        <div className="feedHeroStats">

          <div className="feedStat">
            <strong>1.2K+</strong>
            <span>Stories</span>
          </div>

          <div className="feedStatDivider"></div>

          <div className="feedStat">
            <strong>420+</strong>
            <span>Creators</span>
          </div>

        </div>

      </section>


      {/* =========================
          FEATURED / LATEST
      ========================= */}

      <section className="blogFeedSection">

        <div className="sectionHeader">

          <div>
            <span className="sectionKicker">
              EXPLORE
            </span>

            <h2>
              Latest from the community
            </h2>

            <p>
              Fresh perspectives and stories worth your time.
            </p>
          </div>

          <button className="exploreBtn">
            Explore all
            <span>→</span>
          </button>

        </div>


        {/* Blog horizontal feed */}

        <div className="blogScrollWrapper">

          <div className="blogSection">

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


        {/* Scroll hint */}

        <div className="feedScrollHint">
          <span className="scrollLine"></span>
          <span>Scroll to discover more</span>
          <span className="scrollArrow">→</span>
        </div>

      </section>


      {/* =========================
          TOPICS
      ========================= */}

      <section className="topicsSection">

        <div className="topicsHeading">
          <span className="sectionKicker">
            FIND YOUR INTEREST
          </span>

          <h2>
            Explore by topic
          </h2>
        </div>

        <div className="topicList">

          <button>Technology</button>
          <button>Development</button>
          <button>Cybersecurity</button>
          <button>Travel</button>
          <button>Personal</button>

        </div>

      </section>

    </main>
  );
};

export default Feed;