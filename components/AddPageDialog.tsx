import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const AddPageDialog = ({ isOpen, onClose, onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
      onClose();
    }
  };

  const modalSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
      <ModalOverlay />
      <ModalContent mx={4} maxW={modalSize}>
        <ModalHeader fontSize={{ base: "lg", md: "xl" }}>
          Add a form
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter form name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
            fontSize={{ base: "sm", md: "md" }}
          />
        </ModalBody>
        <ModalFooter gap={2} flexWrap="wrap">
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            fontSize={{ base: "sm", md: "md" }}
          >
            Submit
          </Button>
          <Button
            variant="solid"
            onClick={onClose}
            fontSize={{ base: "sm", md: "md" }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddPageDialog;
