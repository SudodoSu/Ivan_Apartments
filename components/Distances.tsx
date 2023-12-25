"use client";

import { useEffect, useState } from "react";
import { dataObject } from "../lib/LocationDistance";
import GoogleMaps from "./GoogleMaps";

function Distances() {
  const totalLocations = dataObject.locations.length;
  const [showMap, setShowMap] = useState(false);

  const handleMapClose = () => {
    setShowMap(false);
  };

  useEffect(() => {
    document.body.style.overflow = showMap ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMap]);

  return (
    <section className="flex justify-center">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:p-3 p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Distances from Villa Relax</h1>
          <button className="btn-2" onClick={() => setShowMap(true)}>
            Show Map
          </button>
        </div>

        {/* Google Maps */}
        {showMap && <GoogleMaps showMap={showMap} onClose={handleMapClose} />}

        <div className="flex flex-wrap">
          {dataObject.locations.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full sm:w-1/2 p-3 pt-5 ${
                index === totalLocations - 1 || index === totalLocations - 2
                  ? ""
                  : "border-b border-inherit"
              }`}
            >
              <span className="font-medium">{item.place}</span>
              <span className="text-sm	font-bold">{item.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Distances;
