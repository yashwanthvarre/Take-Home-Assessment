import { Box, VStack, Text, Flex, Divider } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FlagIcon, ClipboardIcon, DuplicateIcon } from "./tabIconUtils";

const TabMenu = () => (
  <Box
    borderWidth="1px"
    borderRadius="md"
    p={4}
    w={{ base: "100%", md: "250px" }}
    boxShadow="md"
    bg="white"
  >
    <Box pb={2}>
      <Text fontWeight={500} color="black" fontSize={16}>
        Settings
      </Text>
    </Box>
    <Divider />
    <VStack align="stretch" spacing={3} pt={2} w="100%">
      <Flex align="center" gap={2} w="100%">
        <FlagIcon boxSize={4} color="blue.500" />
        <Text fontSize="sm" fontWeight="bold">
          Set as first page
        </Text>
      </Flex>
      <Flex align="center" gap={2} w="100%">
        <EditIcon boxSize={4} color="gray.600" />
        <Text fontSize="sm" fontWeight="bold">
          Rename
        </Text>
      </Flex>
      <Flex align="center" gap={2} w="100%">
        <ClipboardIcon boxSize={4} color="gray.600" />
        <Text fontSize="sm" fontWeight="bold">
          Copy
        </Text>
      </Flex>
      <Flex align="center" gap={2} w="100%">
        <DuplicateIcon boxSize={4} color="gray.600" />
        <Text fontSize="sm" fontWeight="bold">
          Duplicate
        </Text>
      </Flex>
      <Divider />
      <Flex align="center" gap={2} w="100%">
        <DeleteIcon boxSize={4} color="red.500" />
        <Text fontSize="sm" fontWeight="bold" color="red.500">
          Delete
        </Text>
      </Flex>
    </VStack>
  </Box>
);

export default TabMenu;
