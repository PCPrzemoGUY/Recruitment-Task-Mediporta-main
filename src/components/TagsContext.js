import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TagsContext = createContext();

const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow"
        );
        setTags(response.data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <TagsContext.Provider value={{ tags, loading, error }}>
      {children}
    </TagsContext.Provider>
  );
};

export { TagsContext, TagsProvider };
