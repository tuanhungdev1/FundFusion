interface Props {
  children: React.ReactNode;
  checked: boolean;
  onCLick: () => void;
  name: string;
}

const CheckBox = ({
  children,
  checked = true,
  onCLick = () => {},
  name,
}: Props) => {
  return (
    <div className="flex items-start justify-start gap-x-4">
      <div
        className={`inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-strock"
        }`}
        onClick={onCLick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={onCLick}
          name={name}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-5xl font-bold text-white"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      <div onClick={onCLick}>
        {children && (
          <label className="font-medium cursor-pointer text-text3">
            {children}
          </label>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
