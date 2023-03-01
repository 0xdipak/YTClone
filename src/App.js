import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
// import LeftNav from "./components/LeftNav";
// import LeftNavMenuItem from "./components/LeftNavMenuItem";
// import SearchResultVideo from "./components/SearchResultVideo";
// import SuggestionVideoCard from "./components/SuggestionVideoCard";
// import VideoCard from "./components/VideoCard";



function App() {

  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
