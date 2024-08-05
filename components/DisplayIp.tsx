"use client";
import { useQuery } from "react-query";
import Ip from "./Ip";

interface IpInfo {
  ip: string;
  country: string;
  city: string;
}
const fetchIpInfo = async (): Promise<IpInfo> => {
  const response = await fetch("https://ipapi.co/json/");
  if (!response.ok) {
    throw new Error("Erreur réseau");
  }
  const data = await response.json();
  return {
    ip: data.ip,
    country: data.country_name,
    city: data.city,
  };
};

export default function DisplayIp() {
  const { data, isLoading, error } = useQuery<IpInfo, Error>(
    "ipInfo",
    fetchIpInfo
  );

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div>
      <h1>Informations sur votre connexion :</h1>
      <Ip />
      <p>Pays : {data?.country}</p>
      <p>Ville : {data?.city}</p>
    </div>
  );
}
