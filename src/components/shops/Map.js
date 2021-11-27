import React, {useState} from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
  MarkerClusterer,
} from "@react-google-maps/api";

function Map({markers}) {
  const [activeMarker, setActiveMarker] = useState(null);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyDaqcuqPLMXH1NOKt3fkYpdJb4tmttxfP8", // Add your API key
    language: "mk",
  });
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({position}) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return isLoaded ? (
    <>
      <GoogleMap
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{width: "60vw", height: "100vh"}}
        center={{lat: 41.6086, lng: 21.7453}}
      >
        {markers?.map(({id, name, position}) => (
          //   <MarkerClusterer options={options}>
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
          //   </MarkerClusterer>
        ))}
      </GoogleMap>
    </>
  ) : null;
}

export default Map;
