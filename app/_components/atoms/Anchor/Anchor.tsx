import Link from "next/link"

interface anchorProps {
    text: string,
    href: string
}

export const Anchor = (props:anchorProps) => {
  return (
    <Link className="" href={props.href} prefetch={true}>{props.text}</Link>
  )
}

export const LogoAnchor = (props:anchorProps) => {
    return (
        <Link className="font-orbitron" href={props.href}>{props.text}</Link>
    )
}

export const FooterAnchor = (props: anchorProps) => {
  return (
    <Link className="text-xs tracking-normal uppercase pb-2" href={props.href}>{props.text}</Link>
  )
}