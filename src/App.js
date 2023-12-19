import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a
              href="standard.html"
              class="stand text-start"
              title="standard measurement"
            >
              STANDARD
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="metric.html"
              class="metric text-center"
              title="metric measurements"
            >
              METRIC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
