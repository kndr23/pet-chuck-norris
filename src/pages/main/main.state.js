import { useState, useEffect } from "react";

import { fetchData } from "../../services/fetch";

export const useMainState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetchCategories();
    fetchQuote("");

    setIsLoading(false);
  }, []);

  const fetchCategories = async () => {
    const data = await fetchData("categories");
    setCategories(data);
  };

  const fetchQuote = async (category) => {
    const data = await fetchData("random" + category);
    setQuote(data.value);
  };

  return {
    isLoading,
    categories,
    quote,
    fetchQuote,
  };
};
