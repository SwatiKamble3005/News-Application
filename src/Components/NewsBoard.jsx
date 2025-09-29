import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    const fetchNews = async () => {
      setLoading(true);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest{" "}
        <span className="badge bg-danger text-uppercase">{category}</span> News
      </h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            ))
          ) : (
            <p className="text-center text-muted">No articles available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
