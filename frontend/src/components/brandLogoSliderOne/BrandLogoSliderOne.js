import clsx from "clsx"
import Swiper, { SwiperSlide } from "../swiper";
import BrandLogoOneSingle from "./BrandLogoOneSingle";
import brandLogoData from "./brand-logo-one.json";

const settings = {
  loop: true,
  autoplay: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    }
  }
};

const BrandLogoSliderOne = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <div className="container">
        <div className="brand-logo-active">
          {brandLogoData && (
            <Swiper options={settings}>
              {brandLogoData.map((single, key) => (
                <SwiperSlide key={key}>
                  <BrandLogoOneSingle
                    data={single}
                    spaceBottomClass="mb-30"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSliderOne;
