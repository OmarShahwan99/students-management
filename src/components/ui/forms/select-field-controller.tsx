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
  options: { value: string; label: string }[];
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
            sx={{ width: "100%" }}
            {...field}
            {...selectProps}
            label={label}
            error={!!errors[name]}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
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
