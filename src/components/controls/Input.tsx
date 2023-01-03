import React from "react";
import { Input as InputMantine } from "@mantine/core";

const Input = ({ label="input", description="", placeholder = "" , icon = null ,disabled=false, invalid =false ,error=""}) => {
  return (
    <>
      {/* <InputMantine icon={icon} placeholder={placeholder} disabled invalid /> */}
      <InputMantine.Wrapper
        withAsterisk
        label={label}
        description={description}
        error={error}
      >
        <InputMantine
          icon={icon}
          placeholder={placeholder}
          disabled={disabled}
          invalid={invalid}
        />
      </InputMantine.Wrapper>
    </>
  );
};

export default Input;
