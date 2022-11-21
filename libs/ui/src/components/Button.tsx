import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";

interface IButtonProps {
  onClick?: MouseEventHandler;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  disabled = false,
  className,
}: PropsWithChildren<IButtonProps>) {
  return (
    <button
      className={clsx("w-full p-1.5 rounded bg-red-600", className, {
        "cursor-not-allowed bg-gray-600": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
