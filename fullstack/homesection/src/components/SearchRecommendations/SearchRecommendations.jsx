import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../SearchRecommendations/SearchRecommendations.css";

const SearchRecommendation = ({ query, closeSearchBar }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/search?query=${query}`);
        const data = response.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (result) => {
    const path =
      result.type === "blog"
        ? `/blog/${encodeURIComponent(result.title)}`
        : `/portfolio/${encodeURIComponent(result.title)}`;
    navigate(path); // Navigate to the blog or project page with the title in URL
    closeSearchBar(); // Close the search bar and recommendations
  };

  const blogResults = results.filter(result => result.type === "blog");
  const projectResults = results.filter(result => result.type === "project");

  return (
    <div className="search-recommendations">
      {loading && <div className="loader">Loading...</div>}
      {results.length === 0 && !loading && query && <p>No results found</p>}

      <div className="recommendation-container">
        {/* Left Section - Blogs */}
        <div className="recommendation-column">
          <h3>Our Blogs</h3>
          <div className="recommendation-list">
            {blogResults.map(result => (
              <div
                key={result._id}
                onClick={() => handleSelect(result)}
                className="recommendation-item blog-item"
              >
                <p>{result.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Projects */}
        <div className="recommendation-column">
          <h3>Our Projects</h3>
          <div className="recommendation-list">
            {projectResults.map(result => (
              <div
                key={result._id}
                onClick={() => handleSelect(result)}
                className="recommendation-item project-item"
              >
                <p>{result.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRecommendation;
