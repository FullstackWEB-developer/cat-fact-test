import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const scoreStorage = localStorage.getItem("score");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [score, setScore] = useState(Number(scoreStorage));

  useEffect(() => {
    setLoading(true);
    localStorage.setItem("score", String(score));
    axios.get("https://catfact.ninja/fact").then((res) => {
      if (res.data) {
        setData(res.data.fact);
        setLoading(false);
      }
    });
  }, [score]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="counter">
      <h1>{data}</h1>
      <button disabled={loading} onClick={() => setScore(score + 1)}>
        Click
      </button>
      <h1>{score}</h1>
    </div>
  );
}
