import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "../assets/images/bettercallsaul.jpg";

const Maps = () => {

    const position = [51.505, -0.09];

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

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
    ]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

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
    ]

    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                <Polygon pathOptions={purpleOptions} positions={polygon} />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
                <Rectangle bounds={rectangle} pathOptions={blackOptions} />
            </MapContainer>
        </div>
    );
};

export default Maps;
