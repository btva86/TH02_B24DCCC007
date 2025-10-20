import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: string;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

const B3: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch(() => alert("Không tải được dữ liệu tin tức"));
  }, []);

  return (
    <div className="card">
      <h2>Bài 3: Ứng dụng xem tin tức</h2>
      {articles.map((a) => (
        <div key={a.id} className="news-item">
          <img src={a.image_url} alt={a.title} />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank">Xem chi tiết</a>
          <p><i>{new Date(a.published_at).toLocaleDateString()}</i></p>
        </div>
      ))}
    </div>
  );
};

export default B3;
