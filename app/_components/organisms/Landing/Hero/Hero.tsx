import { HeroTitle } from "@/app/_components/atoms/Text/Text";

const Hero = () => {
  return (
    <div className="w-full h-screen px-10 flex items-center bg-gradient-to-b from-transparent from-50% to-blue-500 to-100%">
      <HeroTitle text={"Discover The Universe of Star Wars"} />
    </div>
  );
};

export default Hero;
