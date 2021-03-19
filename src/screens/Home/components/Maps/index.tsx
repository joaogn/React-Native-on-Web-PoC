import React from 'react';
import { Platform } from 'react-native';
import Map from '../../../../components/Map';
import MapMaker from '../../../../components/MapMaker';
import { DevProps } from '../../../../contexts/DevsContext';
import { UserProps } from '../../../../contexts/AuthContext';
import DevMaker from '../DevMarker';
import UserMaker from '../UserMaker';

interface MapsProps {
  devList: DevProps[];
  user: UserProps | null;
}

const Maps = React.memo(({ devList, user }: MapsProps) => {
  return (
    <Map
      defaultLatitude={0}
      defaultLongitude={0}
      defaultZoom={2}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      style={{ flex: 1, position: Platform.OS === 'web' ? 'absolute' : null }}
    >
      {devList.map(dev => (
        <MapMaker
          key={dev.id}
          id={dev.id}
          longitude={dev.longitude}
          latitude={dev.latitude}
        >
          <DevMaker link={dev.avatar_url} />
        </MapMaker>
      ))}
      {user && (
        <MapMaker
          key={user.id}
          id={user.login}
          longitude={user.longitude}
          latitude={user.latitude}
        >
          <UserMaker link={user.avatar_url} />
        </MapMaker>
      )}
    </Map>
  );
});
export default Maps;
