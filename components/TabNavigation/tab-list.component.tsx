import { VStack } from "@chakra-ui/react";
import TabButton from "./tab-button.component";

const TabList = ({ pages, activeTab, setActiveTab }) => {
  return (
    <VStack align="stretch" spacing={5} w="100%">
      {pages.map((tab) => (
        <TabButton
          key={tab.name}
          tab={tab}
          isActive={activeTab === tab.name}
          onClick={() => setActiveTab(tab.name)}
        />
      ))}
    </VStack>
  );
};

export default TabList;
