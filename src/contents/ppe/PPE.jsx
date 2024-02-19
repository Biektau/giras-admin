import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

export default function PPE() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://girasbackend.onrender.com/ppe/get")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return <ContentWrapper data={data} isLoading={isLoading} isError={isError} />;
}