import { useState } from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";

import PageTabs from "../PageTabs";
import TabMenu from "./tab-menu.component";
import TabList from "./tab-list.component";

const TabHome = () => {
  const [pages, setPages] = useState([
    { name: "Info", icon: "info" },
    { name: "Details", icon: "doc" },
    { name: "Ending", icon: "check" },
  ]);
  const [activeTab, setActiveTab] = useState("Info");

  return (
    <Box p={4}>
      <PageTabs
        pages={pages}
        setPages={setPages}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Divider my={6} />
      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        justifyContent="space-between"
        gap={6}
        p={4}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        bg="gray.50"
        boxShadow="sm"
        maxWidth={500}
      >
        <Box w={{ base: "100%", md: "auto" }}>
          <TabList
            pages={pages}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Box>
        <Box w={{ base: "100%", md: "auto" }}>
          <TabMenu />
        </Box>
      </Flex>
    </Box>
  );
};

export default TabHome;
