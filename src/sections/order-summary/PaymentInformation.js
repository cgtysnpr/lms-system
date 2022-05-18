import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import paymentService from "../../services/payment-service";
import { useNavigate } from "react-router-dom";
const PaymentInformation = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  useEffect(async () => {
    setPrice(String(data.coursePricePlan.price));
    const response = await paymentService.generateToken();
    const initialOptions = {
      "client-id": process.env.REACT_APP_CLIENT_ID,
      currency: data.coursePricePlan.currency.name,
      intent: "capture",
      "data-client-token": response.result.token,
    };
    setOptions(initialOptions);
  }, []);
  const finishPayment = async () => {
    var enrollData = {
      courseId: data.id,
      isSuccess: true,
    };
    const response = await paymentService.finishPay(enrollData);
    if (response) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="mb-3">
      {/*
      <div className="mb-3">
        <h4 className="pb-2 color_b_font_500 ">Payment Information</h4>
        <p>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      <div className="form-group form-control textfield ">
        <label className="order_summary_container">
          {" "}
          <img src="/images/paypal.png" width="100px" alt="" />
          <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" />
        </label>
      </div>
      <div className="form-group form-control textfield ">
        <label className="order_summary_container">
          <small>Credit card</small>
          <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" />
        </label>
      </div>
      <div className="form-group pt-3">
        <input
          type="text"
          className="form-control textfield"
          placeholder="Name on card"
        />
      </div>
      <div className="form-group py-2">
        <input className="form-control textfield" placeholder="Card number" />
      </div>
       */}

      <div className="row">
        {/*
        <div className="col-xl-6 pb-2">
          <div className="form-group">
            <input className="form-control textfield" placeholder="Exp. Date" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <input className="form-control textfield" placeholder="CVV" />
          </div>
        </div>
 */}
        {options.length !== 0 && data && Number(price) > 0 ? (
          <div className="col-xl-12">
            <div className="form-group">
              <PayPalScriptProvider options={options}>
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    color: "blue",
                    label: "buynow",
                    shape: "pill",
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: price,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      finishPayment();
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        ) : null}
        {Number(price) === 0 ? (
          <div className="col-xl-12">
            <div className="form-group">
              <button onClick={() => finishPayment()} class="btn btn-blue my-4">
                Enroll
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default PaymentInformation;
