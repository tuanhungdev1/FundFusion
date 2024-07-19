import { Link } from "react-router-dom";
import { LayoutAuthentication } from "../layout";
import { Button, ButtonGoogle } from "../components/button";
import { FormGroup } from "../components/common";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { IconEyeToggle } from "../components/icon";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchema } from "../utils/validate";
import { useToogleValue } from "../hooks";

interface SignInForm {
  Email: string;
  Password: string;
}

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInForm> = (data) => console.log(data);

  const {
    value: showPassword,
    handleToogleValueClick: handleToogleShowPasswordClick,
  } = useToogleValue(false);

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text2">
        Don't have an account?{" "}
        <Link to={"/sign-up"} className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>

      <ButtonGoogle />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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

        <Link to={"#"} className="font-medium text-right text-primary">
          Forgot password
        </Link>
        <Button type="submit" className="w-full bg-primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
