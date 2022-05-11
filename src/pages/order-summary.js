import Banner from "../sections/order-summary/Banner";
import OrderSummaryDetail from "../sections/order-summary/OrderSummaryDetail";
import StudentLoginDetail from "../sections/order-summary/StudentLoginDetail";
import PaymentInformation from "../sections/order-summary/PaymentInformation";
import BillingAdress from "../sections/order-summary/BillingAdress";
const OrderSummary = () => {
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
                <OrderSummaryDetail />
                <StudentLoginDetail />
                <PaymentInformation />
                <BillingAdress />

                <a href="#" className="btn btn-blue my-4">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OrderSummary;
