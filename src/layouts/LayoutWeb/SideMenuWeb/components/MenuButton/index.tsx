import React, { ComponentType, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useHover } from 'react-native-web-hooks';
import { useTheme } from 'styled-components/native';

interface Props {
  handlePress: () => void;
  icon: ComponentType<SvgProps>;
  isActive: boolean;
}

const MenuButton = ({ isActive, handlePress, icon: Icon }: Props) => {
  const ref = useRef(null);
  const theme = useTheme();
  const isHovered = useHover(ref);

  function getIconColor() {
    if (isActive) {
      if (isHovered) {
        return theme.primaryHover;
      }
      return theme.primary;
    }
    if (isHovered) {
      return theme.transparentGray;
    }
    return theme.white;
  }

  return (
    <TouchableOpacity ref={ref} onPress={handlePress}>
      <Icon
        style={{ marginBottom: 20, marginTop: 20 }}
        width={36}
        height={36}
        viewBox="0 0 24 24"
        fill={getIconColor()}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
