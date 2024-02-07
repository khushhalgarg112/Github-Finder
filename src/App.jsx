import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Inputs from "./components/Input";
import User from "./components/User";

//   auth: "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",

function App() {
  return (
    <RecoilRoot>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inputs />} />
            <Route path="/repos" element={<User />} />
          </Routes>
        </BrowserRouter>
      </div>{" "}
    </RecoilRoot>
  );
}

export default App;
