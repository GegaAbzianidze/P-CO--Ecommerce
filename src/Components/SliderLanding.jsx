import { Icon } from "@iconify/react";

const SliderLanding = () => (
  <>
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="//pand.co/cdn/shop/files/Artboard_5_c0fcedc9-a153-4f51-af28-2d6511d586e5.png?v=1690545667"
          className="w-full md:block hidden"
        />
        <img
          src="//pand.co/cdn/shop/files/art_mobile_87cf4c68-b961-44e4-9af6-419a9c071d6f.png?v=1690533706"
          className="w-full block md:hidden"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="text-white">
            <Icon icon="solar:alt-arrow-left-broken" className="text-4xl" />
          </a>
          <a href="#slide2" className="text-white">
            <Icon icon="solar:alt-arrow-right-broken" className="text-4xl" />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="//pand.co/cdn/shop/files/bowling_desk.png?v=1690533969"
          className="w-full md:block hidden"
        />
        <img
          src="//pand.co/cdn/shop/files/bowling_mob.png?v=1690533969"
          className="w-full block md:hidden"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-white">
            <Icon icon="solar:alt-arrow-left-broken" className="text-4xl" />
          </a>
          <a href="#slide3" className="text-white">
            <Icon icon="solar:alt-arrow-right-broken" className="text-4xl" />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="//pand.co/cdn/shop/files/web_banner.jpg?v=1686847592"
          className="w-full md:block hidden"
        />
        <img
          src="//pand.co/cdn/shop/files/mobile_banner_be2af2f4-2ecb-49ea-ae2e-be4e649b08a9.jpg?v=1686847624"
          className="w-full block md:hidden"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-white">
            <Icon icon="solar:alt-arrow-left-broken" className="text-4xl" />
          </a>
          <a href="#slide4" className="text-white">
            <Icon icon="solar:alt-arrow-right-broken" className="text-4xl" />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="//pand.co/cdn/shop/files/fatigue_desk.png?v=1690536739"
          className="w-full md:block hidden"
        />
        <img
          src="//pand.co/cdn/shop/files/fatigue_mob.png?v=1690536739"
          className="w-full block md:hidden"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-white">
            <Icon icon="solar:alt-arrow-left-broken" className="text-4xl" />
          </a>
          <a href="#slide1" className="text-white">
            <Icon icon="solar:alt-arrow-right-broken" className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  </>
);

export default SliderLanding;
