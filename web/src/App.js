import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Sign In</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                required
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                required
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
                alt="Bruno Novais"
              />
              <div className="user-info">
                <strong>Bruno Novais</strong>
                <span>ReactJS, node.js</span>
              </div>
            </header>
            <p>Tech lover</p>
            <a href="https://github.com/LuckyStrike001">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
                alt="Bruno Novais"
              />
              <div className="user-info">
                <strong>Bruno Novais</strong>
                <span>ReactJS, node.js</span>
              </div>
            </header>
            <p>Tech lover</p>
            <a href="https://github.com/LuckyStrike001">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
                alt="Bruno Novais"
              />
              <div className="user-info">
                <strong>Bruno Novais</strong>
                <span>ReactJS, node.js</span>
              </div>
            </header>
            <p>Tech lover</p>
            <a href="https://github.com/LuckyStrike001">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
                alt="Bruno Novais"
              />
              <div className="user-info">
                <strong>Bruno Novais</strong>
                <span>ReactJS, node.js</span>
              </div>
            </header>
            <p>Tech lover</p>
            <a href="https://github.com/LuckyStrike001">Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
