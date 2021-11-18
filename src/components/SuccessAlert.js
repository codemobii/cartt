import { Box, Center, Text } from "@chakra-ui/layout";
import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";
import Success from "./lottieSuccess.json";

export default function SuccessAlert({ onClick }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Center
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "8", md: "12" }}
      py={{ base: "8", md: "12" }}
    >
      <Stack align="center" textAlign="center">
        <Box>
          <Lottie options={defaultOptions} height={200} width={200} />
        </Box>
        <Stack spacing="20px" align="center">
          <Text fontSize="xl">Order recieved, you will hear from us soon</Text>

          <Box w="200px" mx="auto">
            <Button
              colorScheme="purple"
              size="lg"
              fontSize="md"
              onClick={onClick}
              rounded="xl"
              w="100%"
            >
              Done
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Center>
  );
}
