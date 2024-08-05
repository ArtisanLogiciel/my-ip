"use client";
import DisplayIp from "@/components/DisplayIp";
import Ip from "@/components/Ip";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DisplayIp />
      <Ip />
    </QueryClientProvider>
  );
};

export default Home;
