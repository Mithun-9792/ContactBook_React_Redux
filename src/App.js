import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import UpdateContact from "./Components/UpdateContact";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Form /> */}
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/updatecontact/:index" element={<UpdateContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
