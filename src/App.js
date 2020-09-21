import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState();
  useEffect(() => {
    get();
  });

  var authOptions = {
    method: "get",
    url: "https://query1.finance.yahoo.com/v7/finance/quote?symbols=axp",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET , DELETE , PUT , OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    json: true,
  };
  var hearders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET , DELETE , PUT , OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  const get = async () => {
    await axios(authOptions).then((data) => {
      data = data.data.quoteResponse.result[0];
      setText(data.shortName);
    });
  };

  return (
    <div>
      <h1>API CORS Test</h1>
      <p>{text}</p>
    </div>
  );
}

export default App;
