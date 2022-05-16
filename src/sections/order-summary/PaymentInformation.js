import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentInformation = () => {
  return (
    <div className="mb-3">
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
      <div className="row">
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
        <PayPalScriptProvider
          options={{ "client-id": process.env.PAYMENT_CLIENT_ID }}
        >
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        <button>Buy</button>
      </div>
    </div>
  );
};
export default PaymentInformation;
