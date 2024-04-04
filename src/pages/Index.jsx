import { VStack, Input } from "@chakra-ui/react";
import Header from "../components/Header";

const Index = () => {
  return (
    <VStack spacing={8} align="stretch" mx="auto" maxW="lg" py={8}>
      <Header />
      <Input placeholder="Enter a new todo item" size="lg" borderRadius="md" boxShadow="md" />
    </VStack>
  );
};

export default Index;
