function Input({
  placeholder,
  label,
  text,
  ...props
}: {
  placeholder?: string;
  label?: string;
  text?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-3">
      {label && (
        <label htmlFor="email" className="block font-bold">
          {label}
        </label>
      )}
      <input
        {...props}
        type="text"
        className={"bg-primary p-3 w-full rounded-md"}
        placeholder={placeholder}
      />
      {text && <p className="my-1 text-sm text-gray-400">{text}</p>}
    </div>
  );
}

export default Input;
