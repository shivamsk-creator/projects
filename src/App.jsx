import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Academics from "./sidebar/Academics";
import Courses from "./sidebar/Courses";
import Fees from "./sidebar/Fees";
import Result from "./sidebar/Result";
import Queries from "./sidebar/Queries";
import Homepage from "./Homepage";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
  const [student, setStudent] = useState("");
  const location = useLocation();

  useEffect(() => {
    updateStudent();
  }, [location.pathname]);

  const updateStudent = () => {
    setStudent(location.pathname.startsWith("/student"));
  };
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Homepage />} />
      </Routes>

      {student && (
        <Sidebar>
          <Routes>
            <Route
              path="/student/academics"
              exact={true}
              element={<Academics />}
            />
            <Route path="/student/courses" exact={true} element={<Courses />} />
            <Route path="/student/fees" exact={true} element={<Fees />} />
            <Route path="/student/result" exact={true} element={<Result />} />
            <Route path="/student/queries" exact={true} element={<Queries />} />
          </Routes>
        </Sidebar>
      )}
    </>
  );
};

export default App;
