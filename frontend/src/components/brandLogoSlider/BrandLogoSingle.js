import clsx from "clsx";

const BrandLogoSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)}>
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
    </div>
  );
};

export default BrandLogoSingle;
