import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

export default function Gloves() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://giras-backend-ruzal-02.amvera.io/gloves/get")
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
