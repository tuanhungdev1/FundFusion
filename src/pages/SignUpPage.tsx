import { Link } from "react-router-dom";
import { LayoutAuthentication } from "../layout";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
