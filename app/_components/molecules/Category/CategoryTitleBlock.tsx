import { CategoryTitleText } from '../../atoms/Text/Text'

const CategoryTitleBlock = (props: {name: string}) => {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-blue-300 pb-20 pl-10 pt-44 md:pt-52'>
        <CategoryTitleText text={props.name}/>
    </div>
  )
}

export default CategoryTitleBlock