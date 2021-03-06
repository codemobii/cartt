import {
  Checkbox,
  Flex,
  Select,
  SelectProps,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Stack,
  IconButton,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  size: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onChangeSize?: (size: number) => void;
  onClickGiftWrapping?: () => void;
  onClickSelect?: (data: any) => void;
  selectedProduct: any;
};

// const QuantitySelect = (props: SelectProps) => {
//   return (
//     <Select
//       w={{ base: "100%", md: "64px" }}
//       aria-label="Select quantity"
//       focusBorderColor={useColorModeValue("blue.500", "blue.200")}
//       {...props}
//       colorScheme="purple"
//     >
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//       <option value="4">4</option>
//     </Select>
//   );
// };

const SizeSelect = (props: SelectProps) => {
  return (
    <Select
      w={{ base: "100%", md: "100px" }}
      aria-label="Select size"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
      colorScheme="purple"
    >
      <option value="1">Small</option>
      <option value="2">Medium</option>
      <option value="3">large</option>
    </Select>
  );
};

export const CartItem = (props: CartItemProps) => {
  const [quantity, setQuantity] = React.useState(3);

  const {
    isGiftWrapping,
    name,
    description,
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
      borderWidth={{ base: 1, md: 0 }}
      rounded="lg"
      padding={{ base: "10px", md: 0 }}
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
          {/* <QuantitySelect
            value={quantity}
            onChange={(e) => {
              setQuantity(+e.currentTarget.value);
              if (selectedProduct.name === name) {
                onChangeQuantity?.(+e.currentTarget.value);
              }
            }}
          /> */}
          <SizeSelect
            value={quantity}
            onChange={(e) => {
              setQuantity(+e.currentTarget.value);
              if (selectedProduct.name === name) {
                onChangeSize?.(+e.currentTarget.value);
              }
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
      <Stack
        mt={{ base: "2", md: "4" }}
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
        spacing="5"
      >
        <PriceTag price={price} currency={currency} />
        <SimpleGrid columns={2} spacing="10px" w="100%">
          <SizeSelect
            value={quantity}
            onChange={(e) => {
              setQuantity(+e.currentTarget.value);
              if (selectedProduct.name === name) {
                onChangeSize?.(+e.currentTarget.value);
              }
            }}
          />

          <Button
            colorScheme="purple"
            size="md"
            variant={selectedProduct.name === name ? "solid" : "outline"}
            fontSize="sm"
            rounded="lg"
            onClick={() => {
              onClickSelect?.({ name: name, price: price });
              onChangeQuantity?.(1);
              setQuantity(1);
            }}
          >
            Buy this
          </Button>
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};
