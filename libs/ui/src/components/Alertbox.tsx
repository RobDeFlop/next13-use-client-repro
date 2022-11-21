import clsx from "clsx";
import { PropsWithChildren } from "react";

export function AlertBox({
  title,
  desc,
  style = "info",
  children,
  className,
}: PropsWithChildren<AlertBoxProps>) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full p-2 rounded border",
        {
          "border-red-700 text-red-500 bg-red-600/20 opacity":
            style === "error",
          "border-green-700 text-green-500 bg-green-600/20":
            style === "success",
          "border-yellow-700 text-yellow-500 bg-yellow-600/20":
            style === "warning",
          "border-blue-700 text-blue-500 bg-blue-600/20": style === "info",
        },
        className
      )}
    >
      <p className="font-semibold text-md">{title}</p>
      <p className="text-sm">{desc}</p>
      {children}
    </div>
  );
}

interface AlertBoxProps {
  title: string;
  desc: string;
  style?: "info" | "success" | "warning" | "error";
  className?: string;
}
