import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
      colorScheme: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        danger: "bg-red-500 text-white",
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "hover:bg-blue-600",
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    }
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

function Button({
  size,
  variant,
  colorScheme,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ className, variant, size, colorScheme }))}
      {...props}
    >
      {children}
    </button>
  );
}


export { Button };
