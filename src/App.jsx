import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./Homepage";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";

// Admin Dashboard Import
import AdminSidebar from "./Components/AdminSidebar";
import Dashboard from "./Dashboard/AdminDashboard";
import Students from "./Dashboard/students/Students";
import AdminEnrollment from "./Dashboard/enrollment/AdminEnrollment";
import AdminSettings from "./Dashboard/AdminSettings";
import AddStudentForm from "./Dashboard/students/AddStudentForm";
import AddInstructor from "./Dashboard/instructors/AddInstructor";
import InstructorList from "./Dashboard/instructors/InstructorList";
import EditInstructor from "./Dashboard/instructors/EditInstructor";
import CoursesList from "./Dashboard/courses/CourseList";
import Enquiries from "./Dashboard/enquiries/Enquiries";
import Orders from "./Dashboard/Orders";
import Categories from "./Dashboard/courses/categories/Categories";
import EditStudent from "./Dashboard/students/EditStudent";
import EditEnquiry from "./Dashboard/enquiries/EditEnquiry";
import Expenses from "./Dashboard/expenses/Expenses";
import Income from "./Dashboard/income/Income";
import BookList from "./Dashboard/library/BookList";

// Student Dashboard Import
import StudentSidebar from "./Components/StudentSidebar";
import StudentDashboard from "./studentDashboard/StudentDashboard";
import Footer from "./Components/Footer";
import StudentAcademics from "./studentDashboard/academics/StudentAcademics";
import StudentMarks from "./studentDashboard/StudentMarks";
import StudentProfile from "./studentDashboard/profile/StudentProfile";
import StudentLibrary from "./studentDashboard/library/StudentLibrary";
import StudentPayments from "./studentDashboard/StudentPayments";
import CourseContent from "./studentDashboard/academics/CourseContent";
import StudentQueries from "./studentDashboard/queries/StudentQueries";
import StudentAssignments from "./studentDashboard/assignments/StudentAssignments";

// InStructor Routes
import InstructorSidebar from "./Components/InstructorSidebar";
import InstructorDashboard from "./InstructorDashboard/instructor-dashboard/InstructorDashboard";
import InstructorStudents from "./InstructorDashboard/InstructorStudents/InstructorStudents";
import InstructorCourseList from "./InstructorDashboard/instructor-courses/InstructorCourseList";
import InstructorFees from "./InstructorDashboard/InstructorFees/InstructorFees";
import ScheduleClasses from "./InstructorDashboard/scheduleClasses/ScheduleClasses";
import InstructorResultList from "./InstructorDashboard/instructor-result/InstructorResultList";
import InstructorAssignments from "./InstructorDashboard/InstructorAssignments/InstructorAssignments";
import InstructorEvents from "./InstructorDashboard/InstructorEvents/InstructorEvents";
import InstructorQueries from "./InstructorDashboard/queries/InstructorQueries";

// Authentication Imports
import LoginStudent from "./authentication/LoginStudent";
import StudentProtected from "./protected/StudentProtected";
import LoginInstructor from "./authentication/LoginInstructor";
import InstructorProfile from "./InstructorDashboard/profile/InstructorProfile";
import InstructorProtected from "./protected/InstructorProtected";
import CourseUploads from "./InstructorDashboard/instructor-courses/course-content/CourseUploads";
import LoginAdmin from "./authentication/LoginAdmin";
import AdminProfile from "./Dashboard/profile/AdminProfile";
import AdminProtected from "./protected/AdminProtected";

const App = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [auth, setAuth] = useState();
  const [instructorAuth, setInstructorAuth] = useState();
  const [adminAuth, setAdminAuth] = useState();

  console.log(adminAuth);

  useEffect(() => {
    updateAuth();
    updateInstructorAuth();
    updateAdminAuth();
  });

  const updateAuth = () => {
    setAuth(JSON.parse(window.localStorage.getItem("auth")));
  };
  const updateInstructorAuth = () => {
    setInstructorAuth(
      JSON.parse(window.localStorage.getItem("instructorAuth"))
    );
  };
  const updateAdminAuth = () => {
    setAdminAuth(JSON.parse(window.localStorage.getItem("adminAuth")));
  };

  useEffect(() => {
    setIsAdmin(location.pathname.startsWith("/admin"));
    setIsStudent(location.pathname.startsWith("/student"));
    setIsInstructor(location.pathname.startsWith("/instructor"));
  }, [location.pathname]);

  return (
    <>
      {isAdmin || isStudent || isInstructor ? "" : <Navigation />}

      <Routes>
        <Route path="/" exact={true} element={<Homepage />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/courses" exact={true} element={<Courses />} />
        <Route path="/contact" exact={true} element={<Contact />} />
        <Route path="/blogs" exact={true} element={<Blogs />} />

        {/* Auth Routes */}
        <Route
          path="/login-student"
          exact={true}
          element={<LoginStudent updateAuth={updateAuth} />}
        />
        <Route
          path="/login-instructor"
          exact={true}
          element={
            <LoginInstructor updateInstructorAuth={updateInstructorAuth} />
          }
        />
        <Route
          path="/login-admin"
          exact={true}
          element={<LoginAdmin updateAdminAuth={updateAdminAuth} />}
        />
      </Routes>

      {/* Student Dashboard Routes */}
      {isStudent && (
        <StudentSidebar updateAuth={updateAuth} auth={auth}>
          <Routes>
            <Route
              path="/student/dashboard"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentDashboard} />
              }
            />
            <Route
              path="/student/academic"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentAcademics} />
              }
            />
            <Route
              path="/student/academic/course/:id"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={CourseContent} />
              }
            />
            <Route
              path="/student/profile"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentProfile} />
              }
            />
            <Route
              path="/student/marks"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentMarks} />
              }
            />
            <Route
              path="/student/library"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentLibrary} />
              }
            />
            <Route
              path="/student/queries"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentQueries} />
              }
            />
            <Route
              path="/student/assignments"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentAssignments} />
              }
            />
            <Route
              path="/student/payments"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentPayments} />
              }
            />
          </Routes>
        </StudentSidebar>
      )}

      {/* Admin Dashboard Routes */}
      {isAdmin && (
        <AdminSidebar updateAdminAuth={updateAdminAuth} adminAuth={adminAuth}>
          <Routes>
            <Route
              path="/admin/dashboard"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={Dashboard} />
              }
            />
            <Route
              path="/admin/enquiries"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={Enquiries} />
              }
            />
            <Route
              path="/admin/editEnquiry"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={EditEnquiry} />
              }
            />
            <Route
              path="/admin/courselist"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={CoursesList} />
              }
            />
            <Route
              path="/admin/categories"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={Categories} />
              }
            />
            <Route
              path="/admin/students"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={Students} />
              }
            />
            <Route
              path="/admin/addStudent"
              exact={true}
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={AddStudentForm}
                />
              }
            />
            <Route
              path="/admin/editStudent/:id"
              exact={true}
              element={
                <AdminProtected adminAuth={adminAuth} Component={EditStudent} />
              }
            />
            <Route
              path="/admin/addInstructor"
              exact={true}
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={AddInstructor}
                />
              }
            />
            <Route
              path="/admin/instructorList"
              exact={true}
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={InstructorList}
                />
              }
            />
            <Route
              path="/admin/editInstructor/:id"
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={EditInstructor}
                />
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminProtected adminAuth={adminAuth} Component={Orders} />
              }
            />

            <Route
              path="/admin/enrollment"
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={AdminEnrollment}
                />
              }
            />
            <Route
              path="/admin/book-list"
              element={
                <AdminProtected adminAuth={adminAuth} Component={BookList} />
              }
            />
            <Route
              path="/admin/expenses"
              element={
                <AdminProtected adminAuth={adminAuth} Component={Expenses} />
              }
            />
            <Route
              path="/admin/income"
              element={
                <AdminProtected adminAuth={adminAuth} Component={Income} />
              }
            />

            <Route
              path="/admin/admin-profile"
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={AdminProfile}
                />
              }
            />
            <Route
              path="/admin/AdminSettings"
              element={
                <AdminProtected
                  adminAuth={adminAuth}
                  Component={AdminSettings}
                />
              }
            />
          </Routes>
        </AdminSidebar>
      )}

      {/* Instructor Dashboard */}
      {isInstructor && (
        <InstructorSidebar
          instructorAuth={instructorAuth}
          updateInstructorAuth={updateInstructorAuth}
        >
          <Routes>
            <Route
              path="/instructor/instructor-dashboard"
              exact={true}
              element={<InstructorDashboard instructorAuth={instructorAuth} />}
            />
            {/* <Route
              path="/instructor/instructor-students"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorStudents}
                  instructorAuth={instructorAuth}
                />
              }
            /> */}
            <Route
              path="/instructor/instructor-courses"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorCourseList}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/instructor-courses/:id"
              exact={true}
              element={
                <InstructorProtected
                  Component={CourseUploads}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/profile"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorProfile}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/instructor-fees"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorFees}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/schedule-classes"
              exact={true}
              element={
                <InstructorProtected
                  Component={ScheduleClasses}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/assignments"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorAssignments}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/instructor-events"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorEvents}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/instructor-result"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorResultList}
                  instructorAuth={instructorAuth}
                />
              }
            />
            <Route
              path="/instructor/instructor-queries"
              exact={true}
              element={
                <InstructorProtected
                  Component={InstructorQueries}
                  instructorAuth={instructorAuth}
                />
              }
            />
          </Routes>
        </InstructorSidebar>
      )}

      {isAdmin || isStudent || isInstructor ? "" : <Footer />}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
