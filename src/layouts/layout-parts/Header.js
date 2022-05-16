import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <title>Eagle I Academy</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header>
        <div className="container">
          <div className="header_block d-new-a">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="header_menu">
              <div className="login_menu">
                <Link to="/login">Login</Link>
                <Link to="/signup" className="btn">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="toggleMenu">☰</div>
            <div className="overlay" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
