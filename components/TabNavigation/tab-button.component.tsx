import { Button, Flex, Box, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getIconComponent } from "./tabIconUtils";

const MotionBox = chakra(motion.div);

const TabButton = ({ tab, isActive, onClick }) => {
  return (
    <MotionBox
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 } as any}
      w="100%"
    >
      <Button
        onClick={onClick}
        bg={isActive ? "white" : "gray.100"}
        color={isActive ? "black" : "gray.700"}
        borderColor={isActive ? "orange.400" : "gray.300"}
        variant="solid"
        borderRadius="md"
        px={4}
        py={2}
        shadow={isActive ? "sm" : "none"}
        fontWeight="medium"
        _hover={{ bg: "gray.50" }}
        w="100%"
        justifyContent="flex-start"
      >
        <Flex align="center" gap={2}>
          <Box
            w="20px"
            h="20px"
            borderColor={isActive ? "orange.400" : "gray.400"}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {getIconComponent(tab.icon, {
              color: isActive ? "orange.400" : "gray.600",
            })}
          </Box>
          {tab.name}
        </Flex>
      </Button>
    </MotionBox>
  );
};

export default TabButton;
