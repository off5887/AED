/*global kakao*/
import React, { Component } from 'react';
import styled from "styled-components";



class Map extends Component{

  componentDidMount() {

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9b267b6551dada3a9f0d76905214336f&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {

      kakao.maps.load(() => {

        let container = document.getElementById("Mymap");
        
        let options = {
          center: new kakao.maps.LatLng(38.506502, 127.053617),
          level: 18 //비율 조정

  };

  const map = new window.kakao.maps.Map(container, options);
     
});

};

}

 render() {
  return (
  <div>
    <Maps id="Mymap"/>
  </div>) // 이부분이 지도를 띄우게 될 부분.
}

}

const Maps = styled.div`
width: 550px;
height: 550px;
`;

export default Map;
