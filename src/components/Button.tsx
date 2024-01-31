import { AnchorHTMLAttributes, ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = {
  to?: LinkProps["to"];
  href?: string;
  className: string;
  children: string | ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FunctionComponent<ButtonProps> = ({
  to,
  href,
  className,
  children,
  ...props
}) => {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`} {...props}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={`button ${className}`} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`button ${className}`} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
