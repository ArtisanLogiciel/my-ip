import { useQuery } from "react-query";

const fetchIp = async () => {
  const response = await fetch("/api/getClientIp");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'IP");
  }
  return response.json();
};

const Ip = () => {
  const { data, isLoading, error } = useQuery("clientIp", fetchIp);
  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>erreur : {(error as Error).message}</div>;

  return <div>Votre adresse IP est : {data?.ip}</div>;
};

export default Ip;
