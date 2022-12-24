import clsx from "clsx";
import funFactData from "./fun-fact.json";
import FunFactSingle from "./FunFactSingle";

const FunFact = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass, bgClass)}>
      <div className="container">
        <div className="row">
          {funFactData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <FunFactSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFact;
