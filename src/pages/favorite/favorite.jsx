import React from "react";

import { Quote } from "../../components/quote/quote";

import { storageService } from "../../services/storage";

export const Favorite = () => {
  const quote = storageService.getQuote();

  return <Quote isEditable={false}>{quote}</Quote>;
};
