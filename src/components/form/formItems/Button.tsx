import React, { Children } from "react";
import { Button as MantineButton, MantineSize } from "@mantine/core";

export enum ButtonVariantEnum {
  Outline = "outline",
  White = "white",
  Light = "light",
  Default = "default",
  Filled = "filled",
  Subtle = "subtle",
  Gradient = "gradient",
}

export type ButtonProps = {
  label?:string;
  variant: ButtonVariantEnum;
  disabled: boolean;
  size: MantineSize;
  loading: boolean;
  compact: boolean;
  children?:any
};

function Button({
  variant = ButtonVariantEnum.Filled,
  label = "",
  disabled = false,
  size = "sm",
  loading = false,
  compact = false,
  children = null,
  ...props
}: ButtonProps) {
  return (
    <>
      <MantineButton size={size} compact={compact} loading={loading} {...props}>
        {label}{children}
      </MantineButton>
    </>
  );
}

export default Button;
