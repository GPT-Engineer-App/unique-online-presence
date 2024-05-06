import { Box, Flex, Text, VStack, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex as="nav" bg="brand.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">My Portfolio</Text>
        <Flex gap="4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>
      <VStack spacing={8} p={8} align="stretch">
        <Box bg="brand.700" color="white" p={8}>
          <Text fontSize={isMobile ? "2xl" : "4xl"} fontWeight="bold">Welcome!</Text>
          <Text fontSize={isMobile ? "md" : "xl"}>Discover my world of web development and design.</Text>
        </Box>
        <Box p={8}>
          <Text fontSize="2xl" fontWeight="bold">About Me</Text>
          <Text>Passionate web developer with a knack for creating elegant solutions in the least amount of time. Developed numerous web applications, always eager to learn more and take on new challenges.</Text>
        </Box>
        <Box as="form" p={8} border="1px" borderColor="gray.200">
          <Text fontSize="2xl" fontWeight="bold">Contact Me</Text>
          <VStack spacing={4}>
            <Flex align="center">
              <FaUser />
              <Input placeholder="Your Name" ml={2} />
            </Flex>
            <Flex align="center">
              <FaEnvelope />
              <Input placeholder="Your Email" ml={2} />
            </Flex>
            <Flex align="center">
              <FaPhone />
              <Input placeholder="Your Phone" ml={2} />
            </Flex>
            <Flex align="center">
              <FaMapMarkerAlt />
              <Input placeholder="Your Address" ml={2} />
            </Flex>
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;