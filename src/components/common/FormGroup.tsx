interface Props {
  children: React.ReactNode;
}

const FormGroup = ({ children }: Props) => {
  return <div className="flex flex-col gap-y-3">{children}</div>;
};

export default FormGroup;
