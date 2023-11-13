import { Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading
      fontWeight={600}
      fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
      lineHeight={"110%"}
    >
      Cedi{" "}
      <Text as={"span"} color={"green.400"}>
        Search
      </Text>
    </Heading>
  );
};

export default Header;
