import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectProps,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

interface SelectControllerProps {
  name: string;
  control: Control<any>;
  label: string;
  options: string[];
  selectProps?: SelectProps;
}

const SelectFieldController: React.FC<SelectControllerProps> = ({
  name,
  control,
  label,
  options,
  selectProps,
}) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <>
          <Select
            {...field}
            {...selectProps}
            label={label}
            error={!!errors[name]}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
        </>
      )}
    />
  </FormControl>
);

export default SelectFieldController;
