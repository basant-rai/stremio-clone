import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/homepage";
import Defaultlayout from "./Layout/Default-Layout/Defaultlayout";
import DiscoverPage from "./Pages/discover/discover";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
