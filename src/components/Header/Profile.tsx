import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis Felipe</Text>
          <Text color="gray.300" fontSize="small">
            luisphelipe1000@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Luis Felipe"
        src="https://github.com/GuilhaoF.png"
      />
    </Flex>
  );
}
