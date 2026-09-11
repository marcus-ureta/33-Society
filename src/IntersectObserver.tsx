"use client";
import IntersectObserver from "tailwindcss-intersect/observer";
import { useEffect } from "react";

export default function ObserveWithIntersect({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    IntersectObserver.start();
  }, []);

  return <>{children}</>;
}
