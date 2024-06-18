import Image from "next/image";
import Link from "next/link";
import { ButtonText } from "../../atoms/Text/Text";

interface CategoryImageProps {
    href: string,
    img_src: string,
    img_alt: string,
    button_text: string
}

const CategoryImage = async (props: CategoryImageProps) => {
  return (
    <Link className="group" href={props.href}>
      <div className="relative overflow-hidden">
        <Image
          className="block w-full h-[50vh] object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-300 ease-in-out opacity-90"
          src={props.img_src}
          alt={props.img_alt}
          width={400}
          height={400}
        />
        <ButtonText text={props.button_text} />
      </div>
    </Link>
  );
};

export default CategoryImage