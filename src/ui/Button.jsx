import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-1 md:px-5 md:py-2 text-xs",
    secondary:
      "text-sm px-3.5 py-2.5 md:px-6 md:py-4 inline-block border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-500 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
