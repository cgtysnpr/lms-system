import { Link } from "react-router-dom";
const SecondHeader = () => {
  return (
    <>
      <div>
        <title>Eagle I Academy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
        <link href="css/style.css" type="text/css" rel="stylesheet" />
        <link href="css/fonts/font.css" type="text/css" rel="stylesheet" />
        {/* ------Login Section Start Here ------ */}
        <div className="text-center py-3">
          <Link to={"/"}>
            <img src="./images/logo-black.png" width="220px" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default SecondHeader;
