import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import InputBox from "./InputBox";
import TextareaBox from "./TextareaBox";

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  submit: (data: any) => void;
};

export default function CheckoutModal(props: CheckoutModalProps) {
  const { isOpen, onClose, loading, submit } = props;

  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [shipping, setShipping] = useState("");

  const data = { wallet, email, name, shipping };

  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay style={{ backdropFilter: "blur(10px)" }} />
        <ModalContent p="0">
          <ModalHeader> Checkout</ModalHeader>
          <ModalCloseButton
            pos="absolute"
            color="#fff"
            rounded="full"
            right={{ base: "0", md: "-50px" }}
            top={{ base: "-50px", md: "0" }}
          />

          <ModalBody pb="20px">
            <Stack
              spacing="20px"
              as="form"
              onSubmit={(e: any) => {
                e.preventDefault();
                submit(data);
              }}
            >
              <Stack>
                <InputBox
                  label="Wallet"
                  type="text"
                  value={wallet}
                  onChange={(e: any) => setWallet(e?.target.value)}
                />
                <InputBox
                  label="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e?.target.value)}
                />
                <InputBox
                  label="Name"
                  type="name"
                  value={name}
                  onChange={(e: any) => setName(e?.target.value)}
                />
                <TextareaBox
                  label="Shipping address"
                  value={shipping}
                  onChange={(e: any) => setShipping(e?.target.value)}
                />
              </Stack>
              <Button
                colorScheme="purple"
                size="lg"
                fontSize="md"
                rounded="xl"
                isLoading={loading}
                loadingText="Please wait . . ."
                type="submit"
              >
                Continue
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
