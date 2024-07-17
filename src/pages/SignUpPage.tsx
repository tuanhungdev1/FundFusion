import { Link } from "react-router-dom";
import { LayoutAuthentication } from "../layout";
import LogoGoogle from "../../public/icon/Google.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { control } = useForm({});

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text2">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img src={LogoGoogle} alt="Logo Google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form action="">
        <div>
          <Label>Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe" />
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
