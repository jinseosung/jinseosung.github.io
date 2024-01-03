import { Link } from "react-router-dom";

export default function Button({ to, href, className, children, ...props }) {
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
}
