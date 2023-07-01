import "./style.scss";

const SectionHeading = ({ text, span }) => {
  return (
    <h1 className="SectionHeading__">
      {text}&nbsp;
      <span className="SectionHeading__span">{span}</span>
    </h1>
  );
};

export default SectionHeading;
