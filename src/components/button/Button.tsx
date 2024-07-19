import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponents } from "../common";
interface Props {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  ...rest
}: Props) => {
  const childElement = isLoading ? (
    <div
      className={`w-7 h-7 transition-all border-[3px] border-white rounded-full border-t-transparent animate-spin`}
    ></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={`flex items-center min-h-[56px] text-white justify-center py-4 text-base font-semibold rounded-xl ${className} ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
      {...rest}
    >
      {childElement}
    </button>
  );
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponents,
});
