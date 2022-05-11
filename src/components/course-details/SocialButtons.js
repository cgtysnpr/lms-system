const SocialButtons = ({ data }) => {
  return (
    <li>
      <a href="#">
        <img src={data.image} alt="" />
      </a>
    </li>
  );
};
export default SocialButtons;
