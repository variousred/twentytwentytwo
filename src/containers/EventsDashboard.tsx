import React, { useEffect, useState } from "react";
import { EventCalendarContainer } from "./EventCalendarContainer";
import { EventListContainer } from "./EventListContainer";
import { useMoralisQuery, useNewMoralisObject } from "react-moralis";
import { Button } from "@chakra-ui/react";

export const EventsDashboard = (props) => {
  const [events, setEvents] = useState([{
    name: '',
    doxxed: false,
    audit: false,
    staySafuScan: false,
    reflections: false,
    socials: false,
    earlySaleDate: new Date(),
    liquidityDate: new Date(),
    taxCap: false
  }]);

  const [persistanceStatus, setPersistanceStatus] = useState({
    loading: false,
    saveStatus: "READY",
  });

  const { data, error, isLoading } = useMoralisQuery("Event");
  const { isSaving, error: saveError, save } = useNewMoralisObject("Event")
  const moralissavething = useNewMoralisObject("Event")

  useEffect(() => {
    console.log("running useEffect: ")
    setPersistanceStatus({ loading: true, saveStatus: "LOADING" });
    console.log("useEffect about to set events. data is :\n", JSON.stringify(data))
    const formattedData = data.map((el) => {
      return ({
        name: el.attributes.name, doxxed: el.attributes.doxed, audit: el.attributes.audit,
        staySafuScan: el.attributes.staySafuScan, reflections: el.attributes.reflections,
        socials: el.attributes.socials, earlySaleDate: el.attributes.earlySaleDate,
        liquidityDate: el.attributes.liquidityDate, taxCap: el.attributes.taxCap
      })
    })

    !isLoading && setEvents(formattedData)
  }, [data]);

  const createCoin = (coin) => {
    console.log("eventsdashboard#createCoin");
    setEvents((prev) => {
      console.log("coin: ", JSON.stringify(coin));
      console.log("prev: ", JSON.stringify(prev));
      coin.earlySaleDate = new Date(coin.earlySaleDate)
      coin.liquidityDate = new Date(coin.liquidityDate)
      console.log("after date manipulation: ", JSON.stringify(coin))
      console.log("setting state to: ", JSON.stringify([coin, ...prev], null, 5))
      return [coin, ...prev];
    });
    save(coin)
  };

  if (!isLoading) {
    return (
      <div>
        <EventCalendarContainer events={events} />
        <EventListContainer events={events} handleSubmit={createCoin} />
      </div>
    )
  };
  return (
    <Button isLoading></Button>
  )
};
