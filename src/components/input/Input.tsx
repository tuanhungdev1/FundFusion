import { useController } from "react-hook-form";

interface Props {
  type?: string;
  control: any;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

const Input = ({
  type = "text",
  placeholder = "",
  control,
  name,
  defaultValue,
  className = "",
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
        placeholder={placeholder}
        type={type}
        {...field}
        className={`w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 ${className}`}
      />
    </div>
  );
};

export default Input;
