import SliderLanding from "../Components/SliderLanding";
import TopAnnouncements from "../Components/TopAnnouncements";
import ProductFeatured from "../Components/Product/Featured/Product";
import ProductNew from "../Components/Product/NewArrival/Product";
import ShopCategory from "../Components/ShopCategory";
import Banner from "../Components/Banner";

const Landing = () => {
  return (
    <>
      <TopAnnouncements />
      <SliderLanding />
      <ProductNew />
      <ProductFeatured />
      <Banner />
      <ShopCategory />
    </>
  );
};

export default Landing;
