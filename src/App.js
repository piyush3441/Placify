import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Courses, Home, LogIn, SignUp, SingleCourse } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="main-wrapper">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singlecourse" element={<SingleCourse />} />
        <Route path="/courses/" element={<Courses />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
