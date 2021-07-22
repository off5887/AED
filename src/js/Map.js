/*global kakao*/
import React, { useRef, useEffect, Component } from 'react';
import styled from "styled-components";
import Gnb from './Gnb';
import "../css/common.css";
import { SingleBedTwoTone } from '@material-ui/icons';




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
          level: 13 //비율 조정

  };

  const map = new window.kakao.maps.Map(container, options); // eslint-disable-line no-unused-vars
 

  // 마커가 표시될 위치
  const markerPosition  = new kakao.maps.LatLng(37.450701, 126.870667);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);

});
};
}


//<Media queries = {MAP_MEDIA_QUERIEX}>
// /  </Media>
 render() {
  return (
 

  <div className="wrap">
  
      <Gnb />
      <div className = "Container">
        <Maps id="Mymap"/>
      </div>
 
  </div>



  ) // 이부분이 지도를 띄우게 될 부분.
}

}



const Maps = styled.div`

width: 100%;
height: 950px;
`;


export default Map;
