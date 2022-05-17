import userService from "../../services/user-service";
import { toast } from "react-toastify";
const Form = () => {
  const contactSend = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    const response = await userService.contact(formData);
    if (response) {
      document.getElementById("contact").reset();
      toast.success("Submited!");
    }
  };
  return (
    <div className="col-md-8 pt-5 order-md-last background_color_grey">
      <form id="contact" onSubmit={contactSend}>
        <div className="row">
          <div className="col-xl-7 ">
            <div className="pl-xl-3">
              <h3 className="pb-3 font-weight-bold">Contact</h3>
              <div className="form-group pb-3">
                <label className="f_w_500">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control textfield"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label className="f_w_500">Message</label>
                <textarea
                  className="form-control textfield"
                  cols={10}
                  rows={10}
                  name="message"
                  required
                  placeholder="Enter Message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-blue my-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
