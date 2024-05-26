interface textProps {
    text: string
}

export const Title = (props:textProps) => {
  return (
    <h1>{props.text}</h1>
  )
}

export const SubTitle = (props: textProps) => {
    return (
        <h2>{props.text}</h2>
    )
}

export const Pargraph = (props: textProps) => {
  return (
    <p>{props.text}</p>
  )
}

export const ButtonText = (props: textProps) => {
  return (
    <p className="text-sm md:text-base lg:text-xl font-semibold">{props.text}</p>
  )
}

export const FooterText = (props: textProps) => {
  return (
    <p className="text-xs">{props.text}</p>
  )
}
