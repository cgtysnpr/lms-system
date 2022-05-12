import Banner from "../sections/order-summary/Banner";
import OrderSummaryDetail from "../sections/order-summary/OrderSummaryDetail";
import StudentLoginDetail from "../sections/order-summary/StudentLoginDetail";
import PaymentInformation from "../sections/order-summary/PaymentInformation";
import BillingAdress from "../sections/order-summary/BillingAdress";
import { useParams, useNavigate } from "react-router-dom";
import courseService from "../services/course-service";
import paymentService from "../services/payment-service";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Page from "react-page-loading";
const OrderSummary = () => {
  const [courseData, setCourseData] = useState([]);
  const [pageReady, setPageReady] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();
  const { user } = useAuth();
  useEffect(async () => {
    if (typeof user !== "undefined" && !user) {
      window.location.replace("/login");
    }
    const response = await courseService.courseDetails(id);
    if (response) {
      setCourseData(response.result);
      if (typeof user !== "undefined" && user) {
        const responsePurcased = await courseService.purcasedCourse(
          user.userId
        );
        const check = responsePurcased.result.filter((data) => {
          if (data.courseId === response.result.id) {
            return data;
          }
        });
        if (check.length > 0) {
          window.location.replace("/dashboard");
        } else {
          setPageReady(true);
        }
      }
    }
  }, [id]);
  const Pay = async () => {
    if (courseData) {
      var data = {
        courseId: courseData.id,
        isSuccess: true,
      };
      const response = await paymentService.finishPay(data);
      if (response) {
        window.location.replace("/dashboard");
        toast.success("Enrolled Successfully");
      }
    }
  };
  if (!pageReady) {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={10}></Page>
      </div>
    );
  }
  return (
    <div>
      <Banner />
      {/* ------ Banner Section End Here ------ */}
      {/* ------ Order Summary Section Start Here ------ */}
      <section className="instructor_outer">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 pt-4">
              <div className="pl-xl-3">
                {courseData.length !== 0 ? (
                  <OrderSummaryDetail data={courseData} />
                ) : null}

                <StudentLoginDetail />
                <PaymentInformation />
                <BillingAdress />

                <button onClick={Pay} className="btn btn-blue my-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OrderSummary;
