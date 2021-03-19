import React from 'react';
import { Text, View } from 'react-native';
import LayoutWeb from '../../layouts/LayoutWeb';
import MobileScreen from './MobileScreen';
import { useSizeContext } from '../../contexts/SizeContext';

const Chart = () => {
  const { isSmallScreen } = useSizeContext();
  if (isSmallScreen) {
    return <MobileScreen />;
  }
  return (
    <LayoutWeb>
      <View testID="chartContainerWeb" style={{ minWidth: '95%', flex: 1 }}>
        <Text>Graphic</Text>
      </View>
    </LayoutWeb>
  );
};

export default Chart;
