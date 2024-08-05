import { useQuery } from "react-query";
const fetchIp = async (): Promise<string> => {
  const response = await fetch("https://api.ipify.org?format=json");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'adresse IP");
  }
  const data = await response.json();
  return data.ip;
};
export const IpV4 = () => {
  const {
    data: ip,
    isLoading,
    error,
  } = useQuery<string, Error>("ipv4", fetchIp);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;
  return <div>Adresse IP : {ip}</div>;
};
