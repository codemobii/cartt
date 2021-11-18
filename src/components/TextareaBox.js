import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

export default function TextareaBox({
  id = "",
  label = "",
  value = "",
  onChange,
  placeholder = "",
  size = "md",
}) {
  return (
    <FormControl id={id} isRequired pos="relative">
      <FormLabel zIndex="10" fontSize="sm" color="gray.400" fontWeight="md">
        {label}
      </FormLabel>
      <Textarea
        onChange={onChange}
        value={value}
        shadow="sm"
        size={size}
        fontSize="sm"
        rounded="md"
        placeholder={placeholder}
      />
    </FormControl>
  );
}
