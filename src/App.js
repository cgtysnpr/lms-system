import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import OrderSummary from "./pages/order-summary";
import SignUp from "./pages/sign-up";
import ForgatPasswordFirst from "./pages/forgat-password-first";
import ForgatPasswordSecond from "./pages/forgat-password-second";
import ForgatPasswordThird from "./pages/forgat-password-third";
import EditProfile from "./pages/edit-profile";
import CourseDetails from "./pages/course-details";
import Dashboard from "./pages/dashboard";
import CourseCurriculum from "./pages/course-curriculum";
import Contact from "./pages/contact";
import AuthorDetails from "./pages/author-details";
import MainLayout from "./layouts/MainLayout";
import SecondLayout from "./layouts/SecondLayout";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/JWTContext";
import "./styles/css/bootstrap.css";
import "./styles/css/style.css";
import "./styles/css/fonts/font.css";
export default function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer theme="colored" />
        <Router>
          <Routes>
            <Route exact element={<MainLayout />}>
              <Route exact index path="/" element={<Home />} />
              <Route
                exact
                path="course-details/:id"
                element={<CourseDetails />}
              />
              <Route
                exact
                path="order-summary/:id"
                element={<OrderSummary />}
              />
              <Route exact path="edit-profile" element={<EditProfile />} />
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route
                exact
                path="course-curriculum/:id"
                element={<CourseCurriculum />}
              />
              <Route exact path="contact" element={<Contact />} />
              <Route
                exact
                path="author-details/:id"
                element={<AuthorDetails />}
              />
            </Route>
            <Route exact path="/" element={<SecondLayout />}>
              <Route exact path="login" element={<Login />} />
              <Route exact path="signup" element={<SignUp />} />
              <Route
                exact
                path="forgat-password-first"
                element={<ForgatPasswordFirst />}
              />
              <Route
                exact
                path="forgat-password-second"
                element={<ForgatPasswordSecond />}
              />
              <Route
                exact
                path="forgat-password-third"
                element={<ForgatPasswordThird />}
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
