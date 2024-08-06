import { Controller, Control } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface TextAreaControllerProps {
  name: string;
  control: Control<any>;
  label: string;
  textFieldProps?: TextFieldProps;
}

const TextAreaController: React.FC<TextAreaControllerProps> = ({
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
          multiline
          rows={4}
          size="small"
        />
      )}
    />
  </>
);

export default TextAreaController;
