import React from "react";
import { useRouter } from "next/router";
import { getServiceById } from "../src/helpers/requests";
import Service from "../src/components/Service";
import { useQuery } from "react-query";

const ServicePage = (toggleFavorites, favorites) => {
  const router = useRouter();

  const { id } = router.query;
  const { data: service } = useQuery(["service", id], () => getServiceById(id));

  if (!service) return null;
  const { name } = service;

  return (
    <>
      <h2 className="px-16 mb-5 text-xl font-semibold text-center">{name}</h2>
      <Service
        service={service}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
      />
    </>
  );
};

export default ServicePage;
