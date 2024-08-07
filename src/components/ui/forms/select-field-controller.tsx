import { Controller, Control } from "react-hook-form";
import { Select, SelectProps, MenuItem, FormHelperText } from "@mui/material";
import { useTranslation } from "react-i18next";

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
}) => {
  const { t } = useTranslation();
  return (
    <>
      {label && (
        <label style={{ marginBottom: "5px", display: "block" }}>{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <>
            <Select
              sx={{ width: "100%" }}
              {...field}
              {...selectProps}
              error={!!errors[name]}
              size="small"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {t(errors[name]?.message?.toString()!)}
            </FormHelperText>
          </>
        )}
      />
    </>
  );
};

export default SelectFieldController;
