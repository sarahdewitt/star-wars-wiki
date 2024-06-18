import Image from "next/image";
import { TitleText } from "../../atoms/Text/Text";

interface titleBlockProps{
  title: string,
    src: string,
    alt: string
}

export const NamespaceTitleBlock = (props: titleBlockProps) => {
  return (
    <div className="relative overflow-hidden">
      <TitleText text={props.title}/>
        <Image
          className="block w-full h-full object-cover"
          src={props.src}
          alt={props.alt}
          width={1000}
          height={1000}
        />
    </div>
  )
}
