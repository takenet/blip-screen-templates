import React from "react";
import { Route, Routes } from "react-router-dom";

import ComponentList from "./pages/componentList";
import Accordion from "./components/accordion/Accordion";
import Alert from "./components/alert/alert";
import Banner from "./components/banner/banner";
import Autocomplete from "./components/autocomplete/autocomplete";
import Avatar from "./components/avatar/avatar";

function ComponentRoutes() {
  return (
      <Routes>
        <Route path="/" element={<ComponentList />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
  );
};

export default ComponentRoutes;
