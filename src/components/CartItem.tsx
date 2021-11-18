import {
  Checkbox,
  Flex,
  Select,
  SelectProps,
  useColorModeValue,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  size: string;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onChangeSize?: (size: string) => void;
  onClickGiftWrapping?: () => void;
  onClickSelect?: (data: any) => void;
  selectedProduct: any;
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
      colorScheme="purple"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

const SizeSelect = (props: SelectProps) => {
  return (
    <Select
      maxW="100px"
      aria-label="Select size"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
      colorScheme="purple"
    >
      <option value="sm">Small</option>
      <option value="md">Medium</option>
      <option value="lg">large</option>
    </Select>
  );
};

export const CartItem = (props: CartItemProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const {
    isGiftWrapping,
    name,
    description,
    size,
    imageUrl,
    currency,
    price,
    onChangeSize,
    onChangeQuantity,
    onClickSelect,
    selectedProduct,
  } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <HStack>
          <QuantitySelect
            value={quantity}
            onChange={(e) => {
              setQuantity(+e.currentTarget.value);
              if (selectedProduct.name === name) {
                onChangeQuantity?.(+e.currentTarget.value);
              }
            }}
          />
          <SizeSelect
            value={size}
            onChange={(e) => {
              onChangeSize?.(e.currentTarget.value);
            }}
          />
        </HStack>
        <PriceTag price={price} currency={currency} />
        <IconButton
          aria-label={`Select ${name} from cart`}
          onClick={() => {
            onClickSelect?.({ name: name, price: price });
            onChangeQuantity?.(1);
            setQuantity(1);
          }}
        >
          <Checkbox
            isChecked={selectedProduct.name === name}
            rounded="full"
            colorScheme="purple"
          />
        </IconButton>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          aria-label={`Select ${name} from cart`}
          onClick={() => {
            onClickSelect?.({ name: name, price: price });
            onChangeQuantity?.(1);
            setQuantity(1);
          }}
        >
          <Checkbox
            isChecked={selectedProduct.name === name}
            colorScheme="purple"
          />
        </IconButton>
        <HStack>
          <QuantitySelect
            value={quantity}
            onChange={(e) => {
              setQuantity(+e.currentTarget.value);
              if (selectedProduct.name === name) {
                onChangeQuantity?.(+e.currentTarget.value);
              }
            }}
          />
          <SizeSelect
            value={size}
            onChange={(e) => {
              onChangeSize?.(e.currentTarget.value);
            }}
          />
        </HStack>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
