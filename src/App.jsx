import "./App.css";
import AwesomeSlide from "./components/AwesomeSlide/AwesomeSlide";

import BarChart from "./components/BarChart/BarChart";
import PieChart from "./components/BarChart/PieChart";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-red-400">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <Phones></Phones>
      <PieChart></PieChart>
      <AwesomeSlide></AwesomeSlide>
    </>
  );
}

export default App;
