import { Link } from "react-router-dom";
import { LayoutAuthentication } from "../layout";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormGroup } from "../components/common";
import { Button, ButtonGoogle } from "../components/button";
import { CheckBox } from "../components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconEyeToggle } from "../components/icon";
import { useToogleValue } from "../hooks";
import { signUpFormSchema } from "../utils/validate";

interface SignUpForm {
  FullName: string;
  Email: string;
  Password: string;
  Term: boolean;
}

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpFormSchema),
  });

  const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);

  const { value: acceptTerm, handleToogleValueClick: handleToogleTermClick } =
    useToogleValue(false);
  const {
    value: showPassword,
    handleToogleValueClick: handleToogleShowPasswordClick,
  } = useToogleValue(false);

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text2">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>

      <ButtonGoogle />
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
            error={errors.FullName?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Email">Email *</Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            control={control}
            name="Email"
            error={errors.Email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Password">Password *</Label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password "
            control={control}
            name="Password"
            error={errors.Password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleToogleShowPasswordClick}
            />
          </Input>
        </FormGroup>
        <div className="flex items-start mb-3 gap-x-5">
          <CheckBox
            checked={acceptTerm}
            onCLick={handleToogleTermClick}
            name="Term"
          >
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
