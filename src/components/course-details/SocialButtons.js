import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,

  // Comment to sepaate, overwriting codesandbox behavior
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
const SocialButtons = ({ data }) => {
  const url = window.location.href;
  return (
    <li>
      {data.title === "facebook" ? (
        <FacebookShareButton url={url} size={32} round={true}>
          <FacebookIcon
            size={"2rem"} // You can use rem value instead of numbers
            round
          />
        </FacebookShareButton>
      ) : null}
      {data.title === "twitter" ? (
        <TwitterShareButton url={url} size={32} round={true}>
          <TwitterIcon
            size={"2rem"} // You can use rem value instead of numbers
            round
          />
        </TwitterShareButton>
      ) : null}
      {data.title === "whatsapp" ? (
        <WhatsappShareButton url={url} size={32} round={true}>
          <WhatsappIcon
            size={"2rem"} // You can use rem value instead of numbers
            round
          />
        </WhatsappShareButton>
      ) : null}
      {data.title === "telegram" ? (
        <TelegramShareButton url={url} size={32} round={true}>
          <TelegramIcon
            size={"2rem"} // You can use rem value instead of numbers
            round
          />
        </TelegramShareButton>
      ) : null}
    </li>
  );
};
export default SocialButtons;
