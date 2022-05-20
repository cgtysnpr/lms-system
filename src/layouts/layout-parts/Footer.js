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
                {" "}
                <a href="#"></a>
              </p>
            </div>
            <div className="footer_link">
              <ul>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
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
