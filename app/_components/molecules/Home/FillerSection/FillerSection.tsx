import { Pargraph, SubTitle } from "@/app/_components/atoms/Text/Text";
interface fillerProps {
  titleText: string;
  subText: string;
  height: string;
}

const FillerSection = (props: fillerProps) => {
  return (
    <div className={`text-center ${props.height} w-3/4 mx-auto justify-center`}>
      <div>
        <SubTitle text={props.titleText} />
        <Pargraph text={props.subText} />
      </div>
    </div>
  );
};

export default FillerSection;
