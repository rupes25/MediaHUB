import Navbar from "../components/Navbar";
import '../css/userCSS/BlogCreate.css'

const BlogCreate = () => {
  return (
    <main className="blogCreatePage">
      <Navbar />

      <section className="blogEditor">

        {/* Page heading */}
        <div className="editorHeading">
          <div>
            <span className="editorLabel">
              CREATE / 01
            </span>

            <h1>
              Write something
              <br />
              <span>worth reading.</span>
            </h1>

            <p>
              Turn your thoughts into a story. Add a title,
              choose a category, upload your visuals and
              publish your work.
            </p>
          </div>

          <div className="editorMeta">
            <span>MEDIAHUB</span>
            <div></div>
            <span>DRAFT</span>
          </div>
        </div>


        {/* Editor layout */}
        <form className="editorLayout">

          {/* =========================
              MAIN CONTENT
          ========================= */}

          <div className="editorMain">

            {/* Title */}
            <div className="editorField titleField">
              <label htmlFor="title">
                BLOG TITLE
              </label>

              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Give your story a title..."
              />
            </div>


            {/* Description */}
            <div className="editorField">
              <label htmlFor="description">
                SHORT DESCRIPTION
              </label>

              <textarea
                id="description"
                name="description"
                rows="3"
                required
                placeholder="Write a short description of your blog..."
              />
            </div>


            {/* Content */}
            <div className="editorField contentField">
              <div className="contentLabel">
                <label htmlFor="blog">
                  BLOG CONTENT
                </label>

                <span>
                  Markdown supported
                </span>
              </div>

              <textarea
                id="blog"
                name="content"
                required
                placeholder="Start writing your story here..."
              />
            </div>

          </div>


          {/* =========================
              SIDEBAR
          ========================= */}

          <aside className="editorSidebar">

            {/* Category */}
            <div className="sideBlock">
              <label htmlFor="category">
                CATEGORY
              </label>

              <select
                id="category"
                name="category"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>

                <option value="technology">
                  Technology
                </option>

                <option value="development">
                  Development
                </option>

                <option value="cybersecurity">
                  Cybersecurity
                </option>

                <option value="travel">
                  Travel
                </option>

                <option value="personal">
                  Personal
                </option>
              </select>
            </div>


            {/* Author */}
            <div className="sideBlock">
              <label htmlFor="author">
                AUTHOR
              </label>

              <input
                id="author"
                name="author"
                type="text"
                required
                placeholder="Author name"
              />
            </div>


            {/* Images */}
            <div className="sideBlock">
              <label htmlFor="images">
                BLOG IMAGES
              </label>

              <div className="uploadBox">
                <input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  required
                />

                <div className="uploadContent">
                  <div className="uploadIcon">
                    +
                  </div>

                  <strong>
                    Add images
                  </strong>

                  <span>
                    Upload at least 5 images
                  </span>

                  <small>
                    JPG, PNG, WEBP
                  </small>
                </div>
              </div>
            </div>


            {/* Publishing info */}
            <div className="publishInfo">
              <div>
                <span>STATUS</span>
                <strong>Draft</strong>
              </div>

              <div>
                <span>VISIBILITY</span>
                <strong>Public</strong>
              </div>
            </div>


            {/* Save button */}
            <button
              type="submit"
              className="saveBlogBtn"
            >
              <span>
                Save blog
              </span>

              <strong>
                ↗
              </strong>
            </button>

          </aside>

        </form>

      </section>
    </main>
  );
};

export default BlogCreate;