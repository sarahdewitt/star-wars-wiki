interface textProps {
  text: string;
}

export const Title = (props: textProps) => {
  return <h1>{props.text}</h1>;
};

export const SubTitle = (props: textProps) => {
  return <h2>{props.text}</h2>;
};

export const Pargraph = (props: textProps) => {
  return <p>{props.text}</p>;
};

export const List = (props: textProps) => {
  return (
    <li>{props.text}</li>
  );
};

export const ButtonText = (props: textProps) => {
  return (
    <p className="text-sm md:text-base lg:text-xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">
      {props.text}
    </p>
  );
};

export const TitleText = (props: textProps) => {
  return (
    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight absolute bottom-10 md:bottom-1/4 left-10">
      {props.text}
    </h3>
  );
};

export const FooterText = (props: textProps) => {
  return <p className="text-xs">{props.text}</p>;
};
