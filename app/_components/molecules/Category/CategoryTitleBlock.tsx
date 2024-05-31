import { TitleText } from '../../atoms/Text/Text'

export const CategoryTitleBlock = ({props}: any) => {
  return (
    <div className='bg-blue-300 relative'>
        <TitleText text={props.name}/>
    </div>
  )
}
