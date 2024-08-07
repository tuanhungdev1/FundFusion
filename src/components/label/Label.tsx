import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponents } from "../common";

interface Props {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label = ({ children, htmlFor = "", className = "" }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 ${className}`}
    >
      {children}
    </label>
  );
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorComponents,
});
