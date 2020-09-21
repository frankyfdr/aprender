import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState();
  useEffect(() => {
    get();
  });

  const get = async () => {
    await axios.get("/v7/finance/quote?symbols=axp").then((data) => {
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
