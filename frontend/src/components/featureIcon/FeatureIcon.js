import clsx from "clsx";
import featureIconData from "../../data/feature-icon.json";
import FeatureIconSingle from "./FeatureIconSingle";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {featureIconData?.map(singleFeature => (
            <div className="col-lg-3 col-sm-6" key={singleFeature.id}>
              <FeatureIconSingle
                singleFeature={singleFeature}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcon;
