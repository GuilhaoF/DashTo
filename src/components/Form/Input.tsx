import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label,...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        id={name}
        name={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.50"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
      />
    </FormControl>
  );
}
