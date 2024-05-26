import Link from "next/link"

interface anchorProps {
    text: string,
    href: string
}

export const Anchor = (props:anchorProps) => {
  return (
    <Link className="hover:underline" href={props.href}>{props.text}</Link>
  )
}

export const LogoAnchor = (props:anchorProps) => {
    return (
        <Link className="font-orbitron" href={props.href}>{props.text}</Link>
    )
}