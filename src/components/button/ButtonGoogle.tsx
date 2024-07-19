import LogoGoogle from "/public/icon/Google.png";

interface Props {
  text?: string;
  onClick?: () => void;
}

const ButtonGoogle: React.FC<Props> = ({
  text = "Sign up with Google",
  onClick,
}) => {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-stroke rounded-xl text-text2"
      onClick={onClick}
    >
      <img src={LogoGoogle} alt="Google Logo" />
      <span>{text}</span>
    </button>
  );
};

export default ButtonGoogle;
