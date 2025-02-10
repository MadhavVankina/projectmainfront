import React, { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../assets/images/marker.png";
import Document from "../assets/images/document.pdf";
import data from "../data/demo_all_sites_data.json";

const Maps = () => {
  const position = [17.18578, 78.3344];

  const customIcon = L.icon({
    iconUrl: Pin,
    iconSize: [32, 32], // Adjust size if needed
    iconAnchor: [16, 32], // Positioning relative to point
    popupAnchor: [0, -32], // Positioning for popup
  });

  const polyline = [];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [17.18425, 78.32895],
    [17.18719, 78.32859],
    [17.1902, 78.33517],
    [17.19143, 78.3404],
    [17.18554, 78.34323],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = {
    Agricultural: { color: "green" },
    "Non-Agricultural": { color: "yellow" },
  };
  const redOptions = { color: "red" };

  return (
    <div className="w-full h-screen p-4">
      <div className="rounded-[8px] h-full w-full overflow-hidden">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
          />

          {data.slice(0, 5).map((item, index) => {
            const position = [
              parseFloat(item.latitude_decimal),
              parseFloat(item.longitude_decimal),
            ];

            console.log(position);
            return (
              <>
                <Marker key={index} icon={customIcon} position={position}>
                  <Popup>
                    <b>
                      {" "}
                      {item?.site_id} + {item?.village}
                    </b>{" "}
                    <br /> <br /> 📅 Purchase Date: {item.conv_proceeding_date}{" "}
                    <br />
                    📏 Site Area: 5 Acres, 20 Guntas <br />
                    🏢 Company : {item?.vendee_name}
                    <br />
                    📜 Sale Deed :{" "}
                    <a href={Document} target="_blank">
                      {item.document_number}.pdf
                    </a>
                  </Popup>
                </Marker>
                {item?.polygon && (
                  <Polygon
                    pathOptions={purpleOptions[item?.property_type]}
                    positions={item?.polygon}
                  />
                )}
              </>
            );
          })}

          {/* <Marker icon={customIcon} position={position}>
            <Popup>
              <b> Site 1 - Sunandanam</b> <br /> <br /> 📅 Purchase Date:
              15-01-2024 <br />
              📏 Site Area: 5 Acres, 20 Guntas <br />
              🏢 Company : My Home Ventures Pvt Ltd.
              <br />
              📜 Sale Deed :{" "}
              <a href={Document} target="_blank">
                TS123456.pdf
              </a>
            </Popup>
          </Marker> */}

          {/* <Polyline pathOptions={limeOptions} positions={polyline} />
          <Polyline pathOptions={limeOptions} positions={multiPolyline} /> */}

          {/* <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
          <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Maps;
