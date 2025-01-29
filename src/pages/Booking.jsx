import React from "react";
import background from "../assets/background.png";
import TrainDetails from "../components/trainDetails";
import Card from "../components/card";

export const Booking = () => (
  <div
    className="h-full w-full py-34 flex flex-col items-center gap-y-20"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <TrainDetails />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
