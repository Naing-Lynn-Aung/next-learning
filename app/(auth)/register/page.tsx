import Image from "next/image";
import logo from "@/public/logo.png";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthForm from "../component/AuthForm";
import Link from "next/link";
import ROUTES from "@/routes";

function page() {
  return (
    <div className="flex">
      <div className="w-1/2 p-10 bg-primary h-screen flex justify-center items-center">
        <div className="space-y-10">
          <Link href={ROUTES.HOME} className="flex items-center space-x-4">
            <Image src={logo} alt="logo" width={100} height={100} />
            <h1 className="font-semibold text-5xl">
              Web <span className="text-main">Forum</span>
            </h1>
          </Link>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            amet, expedita impedit quod nihil facere quaerat facilis
            perspiciatis consequuntur nostrum veniam explicabo? Nobis architecto
            non facere ab aliquam neque fuga.
          </p>
          <Button variant="outline">Login Account ?</Button>
        </div>
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div className="w-4/5 space-y-6">
          <h3 className="font-semibold text-xl">
            Sign up to Web <span className="text-main">Forum</span>
          </h3>
          <Input label="Name" />
          <Input label="Username" />
          <Input label="Email Address" />
          <Input label="Password" />
          <div>
            <Button>Register</Button>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default page;
