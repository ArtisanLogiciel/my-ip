"use client";
import DisplayIp from "@/components/DisplayIp";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DisplayIp />
    </QueryClientProvider>
  );
};

export default Home;
