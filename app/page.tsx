import { LogoAnchor, Anchor } from "./_components/atoms/Anchor/Anchor";
import { Pargraph, SubTitle, Title } from "./_components/atoms/Text/Text";

export default function Home() {
  return (
    <>
    <Title text="Discover The Universe of Star Wars"/>
    <SubTitle text="Explore the Galaxy's Depths"/>
    <Pargraph text="Dive into the heart of the Star Wars saga and explore its vast lore"/>
    <Anchor text={"Films"} href={"/"}/>
    <LogoAnchor text={"Characters"} href={"/"}/>
    </>
  );
}
