import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box pos="relative" bg="gray.700">
      <Container maxW={{ base: "3xl", lg: "7xl" }} px={{ base: "8", md: "12" }}>
        <Flex align="center" h="60px" justify="space-between">
          <Image
            src="https://astroswap.vercel.app/static/media/logo.68bba5bb.png"
            alt=""
            width="130px"
            objectFit="contain"
          />

          <Button colorScheme="purple" size="md" fontSize="sm" rounded="xl">
            Connect
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
