const BillingAddress = () => {
  return (
    <div>
      <div className="mb-3">
        <h4 className="pb-2 color_b_font_500 ">Billing Address</h4>
      </div>
      <div className="form-group   d-flex">
        <select
          className=" form-control textfield"
          style={{ appearance: "none" }}
        >
          <option value>Country</option>
        </select>
        <img
          src="./images/icon-arrow-down.png"
          width="22px"
          height="12px"
          className="float-right mt-3 ml-n5"
          alt=""
        />
      </div>
      <div className="form-group py-2">
        <input
          className="form-control textfield"
          placeholder="Street address"
        />
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
      </div>
    </div>
  );
};
export default BillingAddress;
