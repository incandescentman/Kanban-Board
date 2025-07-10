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
          <Route path="/mobile_app" element={<ProjectBoard projectId="mobile_app" />} />
          <Route path="/website_redesign" element={<ProjectBoard projectId="website_redesign" />} />
          <Route path="/system" element={<ProjectBoard projectId="system" />} />
          <Route path="/wireframe" element={<ProjectBoard projectId="wireframe" />} />
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
