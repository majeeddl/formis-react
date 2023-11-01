import React, { Children } from "react";
import { ButtonProps, Button as MantineButton, MantineSize } from "@mantine/core";

// export enum ButtonVariantEnum {
//   Outline = "outline",
//   White = "white",
//   Light = "light",
//   Default = "default",
//   Filled = "filled",
//   Subtle = "subtle",
//   Gradient = "gradient",
// }

export type TButtonProps = ButtonProps & {
  label?: string;
  disabled?: boolean;
  size?: MantineSize;
  loading?: boolean;
  children?: any;
};

function Button({
  variant = "default",
  label = "",
  disabled = false,
  size = "sm",
  loading = false,
  children = null,
  ...props
}: TButtonProps) {
  return (
    <>
      <MantineButton size={size} loading={loading} {...props}>
        {label}
        {children}
      </MantineButton>
    </>
  );
}

export default Button;
