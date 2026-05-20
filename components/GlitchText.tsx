"use client";

import clsx from "clsx";

export default function GlitchText({
  text,
  className,
  as: As = "span",
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <As className={clsx("glitch", className)} data-text={text}>
      {text}
    </As>
  );
}
