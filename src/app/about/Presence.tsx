"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type * as L from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

const initialLocations: Location[] = [
  { name: "Germany (Europe)", latitude: 51.1657, longitude: 10.4515 },
  { name: "Middle East/Caucasus", latitude: 35.0, longitude: 45.0 },
  { name: "China (Asia)", latitude: 35.8617, longitude: 104.1954 },
];

const Presence = () => {
  const [locations] = useState<Location[]>(initialLocations);
  const [leaflet, setLeaflet] = useState<typeof L | null>(null);
  const [blueIcon, setBlueIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    (async () => {
      const leafletModule = await import("leaflet");
      setLeaflet(leafletModule);

      const icon = new leafletModule.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      setBlueIcon(icon);
    })();
  }, []);

  if (!leaflet || !blueIcon) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-[#67696B]">
        Loading map...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-16 px-4 sm:px-8 bg-[#F8F8F8] font-sans min-h-[70vh]">
      <div className="max-w-7xl w-full">
        <div className="relative text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="w-[2px] h-8 mb-2 bg-[#1D1D1B] mx-auto"></div>
            <span className="text-sm font-medium text-[#009FE3] border border-blue-200 rounded-full px-4 py-1 bg-blue-50">
              Our Global Reach
            </span>
          </div>
          <h2 className="heading text-[#1D1D1B] mt-2">
            Connecting Industries Across Continents
          </h2>
          <p className="mt-4 text-lg text-[#67696B] max-w-3xl mx-auto">
            With production and distribution facilities in key markets, we
            support clients across every major region globally.
          </p>
        </div>

        <div className="w-full relative bg-[#F8F8F8] border border-gray-100 z-10 rounded-xl overflow-hidden">
          <MapContainer
            center={[20, 10]}
            zoom={2}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, index) => (
              <Marker
                key={index}
                position={[loc.latitude, loc.longitude]}
                icon={blueIcon}
              >
                <Popup>{loc.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Presence;
