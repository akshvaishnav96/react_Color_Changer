import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("brown");

  const btndiv = {
    backgroundColor: "white",
    margin: "20%",
    borderRadius: "10px",
    position: "relative",
    top: "90%",
   margin:"auto",

  };

  const changeColor = (e) => {
    console.log(e.target.innerHTML);

    setColor(e.target.innerHTML);
  };

  return (
    <>
      <div
        className="m-auto container"
        style={{ backgroundColor: color, width: "100%", display:"block", height: "100vh" }}
      >
        <div style={btndiv}>
          <button
            onClick={changeColor}
            className="bg-red-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Red
          </button>
          <button
            onClick={changeColor}
            className="bg-green-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Green
          </button>
          <button
            onClick={changeColor}
            className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            blue
          </button>
          <button
            onClick={changeColor}
            className="bg-pink-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pink
          </button>
          <button
            onClick={changeColor}
            className="bg-yellow-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
