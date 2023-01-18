import React from "react";
import { Button as MantineButton } from "@mantine/core";

export enum ButtonVariantEnum {
  Outline = "outline",
  White = "white",
  Light = "light",
  Default = "default",
  Filled = "filled",
  Subtle = "subtle",
  Gradient = "gradient",
}

function Button({
  variant = ButtonVariantEnum.Filled,
  disabled = false,
  size = "sm",
  loading = false,
  compact = false,
  ...props
}) {
  return (
    <>
      <MantineButton size={size} compact={compact} loading={loading} {...props}>
        Save
      </MantineButton>
    </>
  );
}

export default Button;
