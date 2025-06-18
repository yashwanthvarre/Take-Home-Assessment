import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import AddPageDialog from "./AddPageDialog";
import TabButton from "./TabNavigation/tab-button.component";

export type Page = { name: string; icon: string };

interface PageTabsProps {
  pages: Page[];
  setPages: React.Dispatch<React.SetStateAction<Page[]>>;
  activeTab: string;
  setActiveTab: (n: string) => void;
}

const PageTabs = ({
  pages,
  setPages,
  activeTab,
  setActiveTab,
}: PageTabsProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [insertIndex, setInsertIndex] = useState(pages.length);

  const openDialogAt = (idx: number) => {
    setInsertIndex(idx);
    setDialogOpen(true);
  };

  const handleAdd = (name: string) => {
    const newTab: Page = { name, icon: "doc" };
    setPages((prev) => {
      const updated = [...prev];
      updated.splice(insertIndex, 0, newTab);
      return updated;
    });
    setDialogOpen(false);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    setPages((prev) => {
      const reordered = [...prev];
      const [moved] = reordered.splice(result.source.index, 1);
      reordered.splice(result.destination!.index, 0, moved);
      return reordered;
    });
  };

  const dashes = [...Array(3)].map((_, i) => (
    <Box key={i} w="3px" h="1px" bg="gray.400" />
  ));

  return (
    <Box overflowX="auto" whiteSpace="nowrap" w="100%" px={{ base: 2, sm: 4 }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tabs" direction="horizontal">
          {(provided) => (
            <Flex
              align="center"
              ref={provided.innerRef}
              {...provided.droppableProps}
              minW="max-content"
              wrap={{ base: "wrap", md: "nowrap" }}
              gap={{ base: 2, md: 1 }}
            >
              {pages.map((tab, idx) => (
                <Flex key={tab.name} align="center">
                  <Draggable draggableId={tab.name} index={idx}>
                    {(dragProvided) => (
                      <Box
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        display="inline-flex"
                        width="100%"
                      >
                        <TabButton
                          tab={tab}
                          isActive={activeTab === tab.name}
                          onClick={() => setActiveTab(tab.name)}
                        />
                      </Box>
                    )}
                  </Draggable>
                  {idx < pages.length - 1 && (
                    <Flex align="center" gap={1} mx={2} userSelect="none">
                      {dashes}
                      <IconButton
                        aria-label="Add page"
                        onClick={() => openDialogAt(idx + 1)}
                        variant="unstyled"
                        borderWidth={1}
                        borderColor="gray.300"
                        borderRadius="full"
                        bg="white"
                        boxSize={{ base: 8, md: 10 }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        icon={<AddIcon boxSize={2} color="black" />}
                        _hover={{ bg: "gray.100" }}
                        p={0}
                      />
                      {dashes}
                    </Flex>
                  )}
                </Flex>
              ))}
              {provided.placeholder}
              <Flex align="center" gap={1} mx={2} userSelect="none">
                {dashes}
              </Flex>
              <ChakraButton
                leftIcon={<AddIcon boxSize={4} />}
                backgroundColor="#FFFFFF"
                variant="solid"
                borderRadius="md"
                color="black"
                onClick={() => openDialogAt(pages.length)}
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                transition="all 0.2s"
              >
                Add Page
              </ChakraButton>
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
      <AddPageDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAdd={handleAdd}
      />
    </Box>
  );
};

export default PageTabs;
