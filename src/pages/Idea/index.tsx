import { Route, Routes } from "react-router-dom";
import IdeaList from "./List";
import IdeaDetail from "./Detail";
import Layout from "./Layout";

const Idea = () => {
  return (
    <div className="App">
      ddd
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/list" element={<IdeaList />} />
          <Route path="detail" element={<IdeaDetail />} />
          <Route path="*" element={<div>55445</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Idea;
