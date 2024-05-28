import Image from "next/image";
import { TitleText } from "../../atoms/Text/Text";

interface titleBlockProps{
    src: string,
    alt: string
}

export const TitleBlock = (props: titleBlockProps) => {
  return (
    <div className="relative overflow-hidden">
      <TitleText text={"Tatooine"}/>
        <Image
          className="block w-full md:h-screen object-cover"
          src={props.src}
          alt={props.alt}
          width={1000}
          height={1000}
        />
    </div>
  )
}
