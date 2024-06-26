import Link from "next/link";

interface anchorProps {
  text: string;
  href: string;
}

export const Anchor = (props: anchorProps) => {
  return (
    <Link className="" href={props.href} prefetch={true}>
      {props.text}
    </Link>
  );
};

export const LogoAnchor = (props: anchorProps) => {
  return (
    <Link className="font-orbitron" href={props.href}>
      {props.text}
    </Link>
  );
};

export const FooterAnchor = (props: anchorProps) => {
  return (
    <Link className="pb-2 text-xs uppercase tracking-normal" href={props.href}>
      {props.text}
    </Link>
  );
};
