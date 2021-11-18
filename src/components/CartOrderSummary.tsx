import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";

type OrderSummaryItemProps = {
  label: string;
  value?: any;
  children?: React.ReactNode;
};

type OrderSummaryProps = {
  selectedProduct: any;
  quantity: number;
  onOpenModal: () => void;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = (props: OrderSummaryProps) => {
  const { selectedProduct, quantity, onOpenModal } = props;

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem
          label="Subtotal"
          value={formatPrice(selectedProduct.price)}
        />
        <OrderSummaryItem label="Product" value={selectedProduct.name} />
        <OrderSummaryItem label="Quantity" value={quantity} />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(selectedProduct.price * quantity)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="purple"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={onOpenModal}
        rounded="xl"
      >
        Checkout
      </Button>
    </Stack>
  );
};
