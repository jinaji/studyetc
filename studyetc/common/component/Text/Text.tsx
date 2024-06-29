import { CSSProperties, PropsWithChildren } from "react";

export const Text = ({
  text,
  children,
  size = 22,
  weight = 400,
  style,
  underLine = false,
  preLine = true,
  ellipsis = true,
  color = "#000",
  onClick,
}: PropsWithChildren<{
  text?: string;
  size?: number;
  weight?: number;
  style?: CSSProperties;
  underLine?: boolean;
  preLine?: boolean;
  ellipsis?: boolean;
  color?: string;
  onClick?: () => void;
}>) => (
  <div
    onClick={onClick}
    style={{
      color: color,
      fontSize: size,
      fontWeight: weight,
      ...(underLine && {
        textDecoration: "underline",
        textUnderlinePosition: "under",
      }),
      ...(ellipsis !== false && {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }),
      ...(preLine && { whiteSpace: `pre-line`, wordBreak: `keep-all` }),
      ...style,
    }}
  >
    {text ? text : children}
  </div>
);
