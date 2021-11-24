import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { CartItem } from "./components/CartItem";
import { CartOrderSummary } from "./components/CartOrderSummary";
import { cartData } from "./components/_data";
import CheckoutModal from "./components/CheckoutModal";
import { formatPrice } from "./components/PriceTag";

import emailjs from "emailjs-com";
import Navbar from "./components/Navbar";
import SuccessAlert from "./components/SuccessAlert";

export const Cartt = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(cartData[0]);
  const [quantity, setQuantity] = React.useState(1);

  function onClickSelect(data: any) {
    setSelectedProduct(data);
  }

  function onChangeQuantity(data: number) {
    setQuantity(data);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const toast = useToast();

  function submit(data: any) {
    setLoading(true);
    emailjs
      .send(
        "service_4kh6jij",
        "template_i0aiqzx",
        {
          orderId: data.wallet,
          orderDate: new Date().toLocaleDateString(),
          orderTotal: formatPrice(selectedProduct.price * quantity),
          shippingAddress: data.shipping,
          productName: selectedProduct.name,
          productPrice: formatPrice(selectedProduct.price),
          to_email: data.email,
        },
        "user_sJgssHn8SRJeDv2X4BUaE"
      )
      .then((res: any) => {
        setDone(true);
        toast({
          description: "Order recieved, hear from us soon!",
          status: "info",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err: any) => {
        toast({
          description: "Something went wrong, try again!",
          status: "info",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Navbar />
      {done ? (
        <SuccessAlert
          onClick={() => {
            setDone(false);
            onClose();
          }}
        />
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "8", md: "12" }}
          py={{ base: "8", md: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart (3 items)
              </Heading>

              <Stack spacing="6">
                {cartData.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClickSelect={onClickSelect}
                    selectedProduct={selectedProduct}
                    onChangeQuantity={onChangeQuantity}
                    onChangeSize={onChangeQuantity}
                  />
                ))}
              </Stack>
            </Stack>

            <Flex direction="column" align="center" flex="1">
              <CartOrderSummary
                selectedProduct={selectedProduct}
                quantity={quantity}
                onOpenModal={onOpen}
              />
            </Flex>
          </Stack>

          <CheckoutModal
            isOpen={isOpen}
            onClose={onClose}
            loading={loading}
            submit={submit}
          />
        </Box>
      )}
    </>
  );
};
