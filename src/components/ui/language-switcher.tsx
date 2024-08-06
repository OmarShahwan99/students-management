import { MenuItem, Select } from "@mui/material";
import { useLanguage } from "../../contexts/language.context";

const LanguageSwitcher = () => {
  const { changeLanguage, cultureCode } = useLanguage();
  return (
    <Select
      labelId="language-select-label"
      id="language-select"
      label="Language"
      size="small"
      value={cultureCode}
      sx={{ width: "120px" }}
      onChange={(event) => changeLanguage(event.target.value as 0 | 1)}
    >
      <MenuItem value={0}>English</MenuItem>
      <MenuItem value={1}>Arabic</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
