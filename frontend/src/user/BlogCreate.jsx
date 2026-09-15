import Navbar from "../components/Navbar";
import '../css/userCSS/BlogCreate.css'
import { useState } from "react";
import api from '../api/axios.js'


const BlogCreate = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [images, setImages] = useState([])


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length < 5) {
      alert("Please upload atleast 5 images.")
      return;
    }
    setImages(files);

  }

  const uploadToCloudinary = async () => {
    const uploadedUrls = [];
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset =
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ||
      import.meta.env.CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary configuration is missing.");
    }

    for (const image of images) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Cloudinary upload failed");
      }

      uploadedUrls.push(data.secure_url);
    }
    return uploadedUrls;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length < 5) {
      alert("Please upload at least 5 images.");
      return;
    }

    try {
      const imageUrls = await uploadToCloudinary();
      const response = await api.post("/create", {
        title,
        description,
        content,
        category,
        author,
        images: imageUrls,
      });

      console.log(response.data)
      alert("Blog created successfully.")

      setTitle('')
      setDescription('')
      setContent('')
      setCategory('')
      setAuthor('')
      setImages([])

      e.target.reset();
    }
    catch (err) {
      console.log(err.message);
      alert("Something went wrong.")
    }
  }


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
        <form className="editorLayout" onSubmit={handleSubmit}>

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}

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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
                  onChange={handleImageChange}
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