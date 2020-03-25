import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    console.log("data", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Sign In</strong>
        <DevForm onSubmit={handleAddDev}></DevForm>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id}></DevItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
