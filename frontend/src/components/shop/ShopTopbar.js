import React, { Fragment } from "react";
import ShopTopAction from "./ShopTopAction";

const ShopTopbar = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <ShopTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </Fragment>
  );
};

export default ShopTopbar;
