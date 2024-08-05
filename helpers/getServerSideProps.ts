import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientIp =
    context.req.headers["x-forwarded-for"] || context.req.socket.remoteAddress;
  return {
    props: {
      ip: clientIp,
    },
  };
};
