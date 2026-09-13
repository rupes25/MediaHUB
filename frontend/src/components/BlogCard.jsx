import "../css/componentsCSS/BlogCard.css";

const BlogCard = ({
  image,
  title = "Blog title goes here",
  description = "A short description of the blog will appear here.",
  author = "Author Name",
  category = "Technology",
  onClick,
}) => {
  return (
    <article className="blogCard" onClick={onClick}>
      {/* Thumbnail */}
      <div className="blogCardImageWrapper">
        <img
          src={image}
          alt={title}
          className="blogCardImage"
        />

        <span className="blogCategory">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="blogCardContent">

        <h2 className="blogCardTitle">
          {title}
        </h2>

        <p className="blogCardDescription">
          {description}
        </p>

        {/* Bottom section */}
        <div className="blogCardBottom">

          <div className="blogAuthor">
            <div className="authorAvatar">
              {author.charAt(0).toUpperCase()}
            </div>

            <div className="authorInfo">
              <span className="authorLabel">
                Written by
              </span>

              <span className="authorName">
                {author}
              </span>
            </div>
          </div>

          <button
            className="readBlogBtn"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            Read article
            <span>→</span>
          </button>

        </div>
      </div>
    </article>
  );
};

export default BlogCard;