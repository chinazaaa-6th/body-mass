import "./App.css";
import Standard from "./Standard";
import Metric from "./Metric";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="text-center">BMI Calculator</h1>
        <div className="row">
          <div className="col">
            <Standard />
          </div>
          <div className="col">
            <Metric />
          </div>
        </div>
      </div>
    </div>
  );
}
