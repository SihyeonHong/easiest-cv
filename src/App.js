import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NonAdminHome from "./components/NonAdminHome";
import AdminHome from "./components/AdminHome";
import HomeComponent from "./components/HomeComponent";
// import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/userid" element={<NonAdminHome userid={"userid"} />}>
          <Route path="#" element={<HomeComponent />} />
          {/* <Route path=":tab" element={<TabComponent />} /> */}
        </Route>
        <Route path="/admin" element={<AdminHome userid={"admin"} />} />
      </Routes>
    </div>
  );
}

function InitPage() {
  return (
    <div>
      <a href="/userid">userid</a>
      <br></br>
      <a href="/admin">admin</a>
    </div>
  );
}

export default App;
