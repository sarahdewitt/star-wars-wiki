import { InfoBlock } from "../../molecules/Block/InfoBlock";
import { InfoBlockBL, InfoBlockBR, InfoBlockTop } from "../../molecules/Block/OldInfoBlock";
import { TitleBlock } from "../../molecules/PageImage/TitleBlock";

export const PageGrid = ({props}: any) => {
  console.log(props.name)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <TitleBlock src={"/images/rey_kylo.png"} alt={""} />
      <div className="grid grid-cols-2">
        <InfoBlock>
          <li></li>
        </InfoBlock>
      </div>
    </div>
  );
};
