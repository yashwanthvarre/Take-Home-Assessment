import { Icon, Box, IconProps } from "@chakra-ui/react";

import { InfoOutlineIcon, CheckIcon } from "@chakra-ui/icons";

interface DocumentIconProps extends IconProps {}

export const DocumentIcon = (props: DocumentIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z"
    />
    <path
      fill="currentColor"
      d="M13 3.5V9h5.5L13 3.5zM8 13h8v1H8zm0 3h5v1H8z"
    />
  </Icon>
);

export const getIconComponent = (
  type: string,
  props: { color?: string } = {},
) => {
  const color = props.color || "gray.600";

  if (type === "info") {
    return <InfoOutlineIcon color={color} boxSize={{ base: 4, md: 5 }} />;
  }

  if (type === "check") {
    return (
      <Box
        w={{ base: "18px", md: "20px" }}
        h={{ base: "18px", md: "20px" }}
        borderWidth="1.5px"
        borderColor={color}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CheckIcon boxSize={{ base: "10px", md: "12px" }} color={color} />
      </Box>
    );
  }

  return <DocumentIcon color={color} boxSize={{ base: 5, md: 6 }} />;
};

export const FlagIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M4 2v20h2v-7h6l1 2h7V4h-7l-1-2H4z" />
  </Icon>
);

export const DuplicateIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h13v2H5v14H3V3z" />
    <path d="M7 7h14v14H7V7zm2 2v10h10V9H9z" />
  </Icon>
);

export const ClipboardIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16 2H8a2 2 0 00-2 2v2H5a1 1 0 00-1 1v14a2 2 0 002 2h12a2 2 0 002-2V7a1 1 0 00-1-1h-1V4a2 2 0 00-2-2zm-8 2h8v2H8V4zm10 16H6V8h12v12z"
    />
  </Icon>
);
