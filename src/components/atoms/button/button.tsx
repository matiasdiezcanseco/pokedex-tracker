import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className="bg-slate-900 py-2 px-4 rounded-xl hover:bg-slate-800"
    >
      {children}
    </button>
  );
};

export default Button;
