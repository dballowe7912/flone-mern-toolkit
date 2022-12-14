import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridSingle from "./ProductGridSingle";

const ProductGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  

  return (
    <Fragment>
      {products.map((product) => {
        return (
          <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={product._id}>
            <ProductGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem._id === product._id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem._id === product._id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem._id === product._id
                )
              }
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductGrid;
