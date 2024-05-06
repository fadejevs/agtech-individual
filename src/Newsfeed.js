import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'agriculture software',
            apiKey: '0959770c19cb44a8b11b45402c614a74'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest in AgTech</h2>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>No news articles found.</p>
      )}
    </div>
  );
};

export default NewsFeed;