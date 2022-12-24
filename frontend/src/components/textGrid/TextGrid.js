import clsx from "clsx";
import textGridData from "../../data/text-grid-one.json";
import TextGridSingle from "./TextGridSingle";

const TextGrid = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("about-mission-area", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {textGridData?.map((single, key) => (
              <div className="col-lg-4 col-md-4" key={key}>
                <TextGridSingle
                  data={single}
                  spaceBottomClass="mb-30"
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextGrid;
