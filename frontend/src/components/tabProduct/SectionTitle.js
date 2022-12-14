import clsx from "clsx"

const SectionTitle = ({
  titleText,
  subtitleText,
  subtitleColorClass,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div className={clsx("section-title", positionClass, spaceClass, borderClass)}>
      <h2>{titleText}</h2>
      <p className={clsx(subtitleColorClass)}>
        {subtitleText}
      </p>
    </div>
  );
};

export default SectionTitle;
