import clsx from "clsx";

const Button = (props) => {
  const { copy, onClick, variant } = props;

  const styles = clsx(
    variant === "primary" && " bg-teal-200 text-black",
    variant === "secondary" && "bg-teal-800 text-white",
    variant === "tertiary" && "border border-teal-200 text-teal-200",
    "flex font-bold text-center px-8 py-4 m-0"
  );

  return (
    <button className={styles} onClick={onClick}>
      <p className="mx-auto">{copy}</p>
    </button>
  );
};
export default Button;
