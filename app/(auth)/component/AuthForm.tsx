"use client";
import Button from "@/components/Button";
import google from "@/public/google.png";
import github from "@/public/github.png";
import { Bounce, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import ROUTES from "@/routes";

function AuthForm() {
  const oauthSignIn = async (type: "google" | "github") => {
    try {
      await signIn(type, {
        redirectTo: ROUTES.HOME,
      });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className="flex space-x-3">
      <Button
        variant="outline"
        icon={google}
        onClick={() => oauthSignIn("google")}
      >
        Login with Google
      </Button>
      <Button
        variant="outline"
        icon={github}
        onClick={() => oauthSignIn("github")}
      >
        Login with Github
      </Button>
    </div>
  );
}

export default AuthForm;
