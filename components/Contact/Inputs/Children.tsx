import { getContactData } from "@/lib/contact";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useLocale } from "next-intl";
import React from "react";

function Children() {
  const [children, setChildren] = React.useState("");
  const localeActive = useLocale();
  const ContactData = getContactData(localeActive);

  const handleChange = (event: SelectChangeEvent) => {
    setChildren(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        className="!font-Bold center-label"
      >
        Children
      </InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        className="w-full bg-white label:text-grey3"
        id="demo-simple-select"
        size="small"
        name="children"
        value={children}
        label="Children"
        onChange={handleChange}
      >
        <MenuItem value={1}>0</MenuItem>
        <MenuItem value={2}>1</MenuItem>
        <MenuItem value={3}>2</MenuItem>
        <MenuItem value={4}>3</MenuItem>
        <MenuItem value={5}>4</MenuItem>
        <MenuItem value={6}>5</MenuItem>
        <MenuItem value={7}>6</MenuItem>
        <MenuItem value={8}>7</MenuItem>
        <MenuItem value={9}>8</MenuItem>
        <MenuItem value={10}>9</MenuItem>
        <MenuItem value={11}>10</MenuItem>
        <MenuItem value={12}>11</MenuItem>
        <MenuItem value={13}>12</MenuItem>
        <MenuItem value={14}>13</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Children;
