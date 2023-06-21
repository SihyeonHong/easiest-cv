import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import UserHome from "./components/UserHome";
import Tab from "./components/Tab";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/userid" element={<UserHome userid={"userid"} />}>
          <Route path="#" element={<HomeComponent />} />
          {/* <Route path=":tab" element={<Tab />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

function InitPage() {
  return (
    <div>
      <a href="/userid">userid</a>
    </div>
  );
}

export default App;
