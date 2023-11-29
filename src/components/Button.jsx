import { Link } from "react-router-dom";

export default function Button({ to, className, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`button ${className}`} {...props}>
        {children}
      </button>
    );
  }
}
