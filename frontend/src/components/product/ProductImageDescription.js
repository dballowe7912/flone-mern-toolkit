import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "./ProductImageGallery";
import ProductDescriptionInfo from "./ProductDescriptionInfo";

const ProductImageDescription = ({ spaceTopClass, spaceBottomClass, galleryType, product }) => {
    const currency = useSelector((state) => state.currency);
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { compareItems } = useSelector((state) => state.compare);
    const wishlistItem = wishlistItems.find(item => item.id === product._id);
    const compareItem = compareItems.find(item => item.id === product._id);
  
    const discountedPrice = getDiscountPrice(product.price, product.discount);
    const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
    const finalDiscountedPrice = +(
      discountedPrice * currency.currencyRate
    ).toFixed(2);

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            <ProductImageGallery product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageDescription;