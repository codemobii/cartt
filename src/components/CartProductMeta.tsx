import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FiGift } from "react-icons/fi";

export type CartProductMetaProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isGiftWrapping = false, image, name, description } = props;
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing="5" width="full">
      <Image
        rounded="lg"
        width={{ base: "100%", md: "150px" }}
        height={{ base: "200px", md: "120px" }}
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
        boxShadow="2xl"
      />
      <Box pt={{ base: "0", md: "4" }}>
        <Stack spacing="0.5" textAlign={{ base: "center", md: "left" }}>
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {description}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
};
