import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuarios
            </Heading>
            <Button
              cursor={"pointer"}
              as="a"
              size="sm"
              colorScheme="pink"
              fontSize={"sm"}
              leftIcon={<Icon as={RiAddLine} fontSize={"18"} />}
            >
              Criar Novo Usuario
            </Button>
          </Flex>
          <Table colorScheme={"whiteAlpha"} userSelect={"none"}>
            <Thead>
              <Tr>
                <Th px={"6"} color="gray.300" width={8}>
                  <Checkbox colorScheme={"pink"} />
                </Th>
                <Th>Usuario</Th>
                <Th>Data de Cadastro</Th>
                <Th>Cargo</Th>
                <Th width={"8"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Luis Felipe</Text>
                    <Text fontSize={"sm"} color="gray.300">
                      luisphelipe1000@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de Dezembro de 2022</Td>
                <Td>Desenvolvedor Front-end Jr</Td>
                <Td>
                  <Button
                    cursor={"pointer"}
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    fontSize={"sm"}
                    leftIcon={<Icon as={RiPencilLine} fontSize={"16"} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
}
