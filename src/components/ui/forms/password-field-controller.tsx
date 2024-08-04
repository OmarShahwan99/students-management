import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import {
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordFieldControllerProps {
  name: string;
  control: Control<any>;
  label: string;
  textFieldProps?: TextFieldProps;
}

const PasswordFieldController: React.FC<PasswordFieldControllerProps> = ({
  name,
  control,
  label,
  textFieldProps,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          {...textFieldProps}
          type={showPassword ? "text" : "password"}
          label={label}
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
          color={errors[name] ? "error" : undefined}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default PasswordFieldController;
