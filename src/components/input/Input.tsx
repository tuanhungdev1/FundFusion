import { useController } from "react-hook-form";

interface Props {
  type?: string;
  control: any;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  error?: string;
}

const Input = ({
  type = "text",
  placeholder = "",
  control,
  name,
  defaultValue,
  className = "",
  error = "",
}: Props) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });

  return (
    <div className="relative">
      <input
        id={name}
        placeholder={error.length > 0 ? "" : placeholder}
        type={type}
        {...field}
        className={`w-full px-6 py-4 text-sm font-medium border ${
          error.length > 0 ? "border-error" : "border-strock"
        } rounded-xl text-text1 placeholder:text-text4 ${className}`}
      />

      {error.length > 0 && (
        <span className="absolute text-sm font-medium -translate-y-1/2 pointer-events-none error-input text-error top-1/2 left-6">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
