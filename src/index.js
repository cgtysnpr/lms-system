import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ThirdLayout from "./layouts/ThirdLayout";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="course-details" element={<CourseDetails />} />
              <Route path="order-summary" element={<OrderSummary />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="course-curriculum" element={<CourseCurriculum />} />
              <Route path="contact" element={<Contact />} />
              <Route path="author-details" element={<AuthorDetails />} />
            </Route>
            <Route path="/" element={<SecondLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route
                path="forgat-password-first"
                element={<ForgatPasswordFirst />}
              />
              <Route
                path="forgat-password-second"
                element={<ForgatPasswordSecond />}
              />
              <Route
                path="forgat-password-third"
                element={<ForgatPasswordThird />}
              />
            </Route>
          </Routes>
          <Helmet>
            <script src="/js/jquery.js" type="text/javascript"></script>
            <script src="/js/bootstrap.js" type="text/javascript"></script>
            <script src="/js/custom.js" type="text/javascript"></script>
          </Helmet>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
