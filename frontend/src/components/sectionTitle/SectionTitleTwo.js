import clsx from "clsx"

const SectionTitleTwo = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div className={clsx("section-title-2", positionClass, spaceClass)}>
      <h2>{titleText}</h2>
      <p>{subTitleText}</p>
    </div>
  );
};

export default SectionTitleTwo;
