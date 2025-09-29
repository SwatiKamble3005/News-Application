import image from "../assets/default.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-4 mx-3"
      style={{ width: "20rem" }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Untitled"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90) + "..."
            : "Stay updated with the latest headlines from around the world, tailored to your interests, all in one place."}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
