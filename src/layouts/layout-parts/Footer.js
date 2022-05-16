import { Helmet } from "react-helmet";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/js/custom.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_block d-new-a">
            <div className="footer_left">
              <p>
                Copyright© 2021, All rights Reserved.Created by{" "}
                <a href="#">Dignitech</a>
              </p>
            </div>
            <div className="footer_link">
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Helmet>
        <script src="/js/jquery.js" type="text/javascript"></script>
        <script src="/js/bootstrap.js" type="text/javascript"></script>
        <script src="/js/custom.js" type="text/javascript"></script>
      </Helmet>
    </>
  );
};
export default Footer;
