import { useQuery } from "react-query";

const fetchIp = async () => {
  const response = await fetch("/api/getIp/route");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'IP");
  }
  return response.json();
};

const Ip = () => {
  const { data, isLoading, error } = useQuery("clientIp", fetchIp);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>erreur : {error.message}</div>;

  return <div>Votre adresse IP est : {data?.ip}</div>;
};

export default Ip;
