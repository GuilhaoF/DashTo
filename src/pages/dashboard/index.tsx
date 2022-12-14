import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

//desabilitando ssr do nextjs
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

//opcoes do grafico
const options : ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.gray["600"] },
    axisTicks: { color: theme.colors.gray["600"] },
    categories: [
      "2022-09-02T00:00:00:00.000Z",
      "2022-09-03T00:00:00:00.000Z",
      "2022-09-04T00:00:00:00.000Z",
      "2022-09-05T00:00:00:00.000Z",
      "2022-09-06T00:00:00:00.000Z",
      "2022-09-07T00:00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "Series 1",
    data: [31, 1, 27, 28,35,17],
  },
];

export default function Dashboard() {
  return (
    <Flex flexDirection={"column"} height="100vh">
      <Header />

      <Flex width="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Produtividade do Mes 
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Produtividade da Semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
