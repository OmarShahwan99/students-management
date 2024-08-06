import { Controller, Control } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface TextFieldControllerProps {
  name: string;
  control: Control<any>;
  label: string;
  textFieldProps?: TextFieldProps;
}

const TextFieldController: React.FC<TextFieldControllerProps> = ({
  name,
  control,
  label,
  textFieldProps,
}) => (
  <>
    {label && (
      <label style={{ marginBottom: "5px", display: "block" }}>{label}</label>
    )}
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          {...textFieldProps}
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
          color={errors[name] ? "error" : undefined}
          size="small"
        />
      )}
    />
  </>
);

export default TextFieldController;
