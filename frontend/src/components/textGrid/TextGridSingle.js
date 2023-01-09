import clsx from "clsx";

const TextGridSingle = ({ data, spaceBottomClass }) => {
  return (
      <div className={clsx("single-mission", spaceBottomClass)}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
  );
};

export default TextGridSingle;
