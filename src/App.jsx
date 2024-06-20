import "./App.css";

function App() {
  return (
    <>
      ;
      <div className="card">
        <div className="search">
          <input type="text" className="searchbar" placeholder="Search" />
          <button className="btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
            </svg>
          </button>
        </div>

        <div className="weather">
          <h1 className="city">Weather in Delhi</h1>
          <h2 className="temp">51° C</h2>
          <div className="max_min">
            <h4 className="max_temp">Max Temp : 21</h4>
            <h4 className="min_temp">Min Temp : 22</h4>
          </div>
          <img src="" alt="icon not found" className="icon" />
          <div className="description">Rainy</div>
          <div className="humidity">Humidity 60%</div>
          <div className="windspeed">Wind Speed 6.2km/h</div>
        </div>
      </div>
    </>
  );
}

export default App;
