import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export default function InputBox({
  id = "",
  label = "",
  type = "email",
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
      <Input
        onChange={onChange}
        value={value}
        type={type}
        shadow="sm"
        size={size}
        fontSize="sm"
        rounded="md"
        placeholder={placeholder}
        colorScheme="purple"
      />
    </FormControl>
  );
}
