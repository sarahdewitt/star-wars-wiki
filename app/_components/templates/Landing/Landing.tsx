import Footer from "../../molecules/Footer/Footer";
import FillerSection from "../../molecules/Home/FillerSection/FillerSection";
import { HeaderHome, HeaderMobile } from "../../organisms/Header/Header";
import { HomeCategoryGrid } from "../../organisms/Landing/Grid/HomeCategoryGrid";
import Hero from "../../organisms/Landing/Hero/Hero";

export const Landing = () => {
  return (
    <>
      <div className="landing">
        <HeaderHome />
        <HeaderMobile/>
        <Hero />
      </div>
      <FillerSection
        titleText={"Explore the Galaxys's Depths"}
        subText={"Dive into the heart of the Star Wars saga and explore its vast lore"} height={"py-36"}      />
      <HomeCategoryGrid />
      <FillerSection
        titleText={
          "“Once you start down the dark path, forever will it dominate your destiny.”"
        }
        subText={"—Yoda, The Empire Strikes Back"}
        height={"h-screen flex flex-col"}
      />
      <Footer/>
    </>
  );
};
