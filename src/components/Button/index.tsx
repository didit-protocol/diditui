import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function Button({...props}: ButtonProps) {
  return <button className="text-blue-500" {...props} />;
}


export { Button };
