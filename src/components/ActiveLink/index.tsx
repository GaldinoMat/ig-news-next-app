import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClass: string;
}

export function ActiveLink({
  children,
  activeClass,
  ...props
}: IActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === props.href ? activeClass : "";

  return (
    <Link {...props}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
