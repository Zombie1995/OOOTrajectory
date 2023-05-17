import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface IPanelMap {
    mapWidth: number
    mapHeight: number
    position: number[]
}

export const PanelMap: React.FC<IPanelMap> = ({ position, mapHeight, mapWidth}) => {
    return (
        <YMaps>
            <Map width={mapWidth + "px"} height={mapHeight} defaultState={{ center: position, zoom: 15 }} >
                <Placemark geometry={position}/>
            </Map>
        </YMaps>
    );
};

export {}
