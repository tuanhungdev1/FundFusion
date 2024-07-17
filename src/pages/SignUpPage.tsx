import { Link } from "react-router-dom";
import { LayoutAuthentication } from "../layout";
import LogoGoogle from "../../public/icon/Google.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormGroup } from "../components/common";
import { Button } from "../components/button";
import { CheckBox } from "../components/checkbox";
import { useState } from "react";

interface SignUpForm {
  FullName: string;
  Email: string;
  Password: string;
}

const SignUpPage = () => {
  const { control, handleSubmit } = useForm<SignUpForm>({});

  const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);

  const [acceptTerm, setAcceptTerm] = useState(false);

  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormGroup>
          <Label htmlFor="FullName">Full Name *</Label>
          <Input
            type="text"
            placeholder="Jhon Doe"
            control={control}
            name="FullName"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Email">Email *</Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            control={control}
            name="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Password">Password *</Label>
          <Input
            type="password"
            placeholder="Create a password "
            control={control}
            name="Password"
          />
        </FormGroup>
        <div className="flex items-start mb-3 gap-x-5">
          <CheckBox checked={acceptTerm} onCLick={handleToggleTerm} name="Term">
            <p className="flex-1 text-sm text-text2">
              {" "}
              I agree to the{" "}
              <span className="underline text-secondary">
                Terms of Use
              </span>{" "}
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </CheckBox>
        </div>

        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
