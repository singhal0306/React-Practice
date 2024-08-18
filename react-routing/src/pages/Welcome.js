import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Newuser from "./Newuser";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="/welcome/new">New User</Link>
      <Routes>
        <Route path="/welcome/new" element={<Newuser />}/>
      </Routes>
      <Newuser/>
    </section>
  )

};

export default Welcome;
