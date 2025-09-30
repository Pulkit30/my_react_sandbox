import React, { use, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} />
      <p>This movie was rating {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={8}
      messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="textStyle" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
