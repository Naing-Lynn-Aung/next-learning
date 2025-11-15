import Image, { StaticImageData } from "next/image";

function Button({
  icon,
  children,
  variant = "normal",
  ...props
}: {
  icon?: string | StaticImageData;
  children: React.ReactNode;
  variant?: "normal" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`w-full flex space-x-3 items-center justify-center rounded-md px-4 py-2 ${
        variant === "outline" ? " border-2 border-main" : "bg-main"
      }`}
    >
      {icon && <Image src={icon} alt="icon" width={30} height={30} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
