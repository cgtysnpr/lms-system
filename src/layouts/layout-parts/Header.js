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
              <a href="#">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div className="header_menu">
              <div className="login_menu">
                <a href="/login">Login</a>
                <a href="/signup" className="btn">
                  Sign Up
                </a>
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
