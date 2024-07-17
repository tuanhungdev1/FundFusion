interface Props {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  className?: string;
}

const Button = ({ children, type = "button", className = "" }: Props) => {
  return (
    <button
      type={type}
      className={`flex items-center text-white justify-center py-4 text-base font-semibold rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
