"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type * as L from "leaflet";
import ContactCard from "@/components/shared/contact/ContactCard";
import { locations as contactLocations } from "@/components/shared/contact/contactData";

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

interface MapLocation {
  name: string;
  latitude: number;
  longitude: number;
}

const initialMapLocations: MapLocation[] = [
  { name: "Germany (Europe)", latitude: 51.1657, longitude: 10.4515 },
  { name: "Middle East/Caucasus", latitude: 35.0, longitude: 45.0 },
  { name: "China (Asia)", latitude: 35.8617, longitude: 104.1954 },
];

const Hero: React.FC = () => {
  const [mapLocations] = useState<MapLocation[]>(initialMapLocations);
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
    <section className="pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="heading text-[#1D1D1B] mb-4">
            Connecting Industries Across Continents
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#67696B] mb-8 sm:mb-4">
            With production and distribution facilities in Germany and China,
            CPS GmbH supports clients across Europe, Asia, and beyond.
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
            {mapLocations.map((loc, index) => (
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

        <div className="p-4 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {contactLocations.map((location, index) => (
                <ContactCard key={index} location={location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
