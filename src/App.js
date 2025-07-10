import React from "react";
import RootLayout from "./layouts/RootLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectBoard from "./Pages/ProjectBoard";
import Message from "./Pages/Message";

const App = () => {
  const location = useLocation();
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<ProjectBoard projectId="1" />} />
          <Route path="/2" element={<ProjectBoard projectId="2" />} />
          <Route path="/3" element={<ProjectBoard projectId="3" />} />
          <Route path="/4" element={<ProjectBoard projectId="4" />} />
          <Route
            path="/*"
            element={<Message routeName={location.pathname} />}
          />
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
