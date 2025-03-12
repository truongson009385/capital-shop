import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode; // Thêm children vào type Props
};

export default function PolicyCard({ className, children }: Props) {
  return <div className={cn("flex flex-col items-center justify-center", className)}>
    <div className="mb-4">
        {children}
    </div>
    <h3 className="mb-2 text-center text-xl font-semibold">Fast & Free Delivery</h3>
    <p className="mb-0 text-center font-medium text-gray-700">Free delivery on all orders</p>
  </div>;
}
