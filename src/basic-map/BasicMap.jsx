import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from './placeholder.png';

// import './getmap.css'
// import { useRef } from "react";


function basicmap() {
    const centerdata = [23.001016342231864, 72.557926539537];
    const Zoom_level = 9;

    
    // const Mapref = useRef([]);

    const markers = [
        {
          name: "Location A",
          position: [21.1702, 72.8311],
          description: "This is the description for Location A",
          link: "https://goo.gl/maps/zWpC7EbVAzvpFXeKA"
        },
        {
          name: "Location B",
          position: [23.012552591831234, 72.57298999952735],
          description: "This is the description for Location B",
          link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.012552591831234+72.57298999952735"
        },
        {
          name: "Location C",
          position: [23.013182866969736, 72.57286107799173],
          description: "This is the description for Location C",
          link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.013182866969736+72.57286107799173"
        },
        {
            name: "Location 1",
            position: [23.005440659970454, 72.55981481451403],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.005440659970454+72.55981481451403"
          },
          {
            name: "Location 2",
            position: [23.001016342231864, 72.557926539537],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.001016342231864+72.557926539537"
          },
          {
            name: "Location 3",
            position: [23.009864832657527, 72.54934347145955],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.009864832657527+72.54934347145955"
          },
          {
            name: "Location 4",
            position: [22.97976179477169, 72.56985700416463],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:22.97976179477169+72.56985700416463"
          },
          {
            name: "Location 5",
            position: [23.005872097841323, 72.59858680544608],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.005872097841323+72.59858680544608"
          },
          {
            name: "Location 6",
            position: [23.018137751250816, 72.52655380837412],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 7",
            position: [23.01473557043148, 72.50655003253644],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.01473557043148, 72.50655003253644"
          },
          {
            name: "Location 8",
            position: [23.030489138904002, 72.50894640137518],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.030489138904002, 72.50894640137518"
          },
          {
            name: "Location 9",
            position: [23.040097911659736, 72.51596433868859],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 10",
            position: [23.040382985009376, 72.51541287528586],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 11",
            position: [23.013525780846862, 72.50545651631603],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 12",
            position: [23.048755018961735, 72.54167706360282],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 13",
            position: [23.047589329042697, 72.53084819400443],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 14",
            position: [23.032266399392654, 72.53204982353527],
            description: "This is the description for Location B",
            link: "http://maps.google.com/maps?z=12&t=m&q=loc:23.018137751250816+72.52655380837412"
          },
          {
            name: "Location 15",
            position: [23.015203768003342, 72.50647228066451],
            description: "This is the description for Location B",
            link: "https://www.example.com/locationB"
          },
          {
            name: "Location 16",
            position: [23.06928099200954, 72.58190364682282],
            description: "This is the description for Location B",
            link: "https://www.example.com/locationB"
          },

      ];

      const handleClick = (link) => {
        console.log("click");
        if(window.event.detail === 1){
        window.open(link, '_blank');
      }
    }

    const MarkerIcon = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      });


    return (
        <div className="row">
            <div className="col text-center" style={{ marginTop: "10rem" }}>
                <h2>E-savari location</h2>
                <div className="col">
                    < MapContainer center={centerdata} zoom={Zoom_level} style={{ height: "400px" }} >
                        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=v1uBB4f60ih0w9INaMQj" />
                        {markers.map((marker, index) => (
                            < Marker key={index} position={marker.position}  icon={MarkerIcon}   eventHandlers={{
                                click: (e) => {
                                  handleClick(marker.link);
                                }
                              }}>
                                <Popup>
                                    <h3>{marker.name}</h3>
                                    <p>{marker.description}</p>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default basicmap;
// "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=v1uBB4f60ih0w9INaMQj"

