"use client";

import { Flex } from "@chakra-ui/react";
import TabHome from "../components/TabNavigation/tab-home.component";

const Home = () => {
  return (
    <Flex minH="100vh" p={4} flexDirection="column" backgroundColor="#F9FAFB">
      <TabHome />
    </Flex>
  );
};

export default Home;
