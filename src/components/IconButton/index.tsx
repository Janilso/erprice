import {
  ColorValue,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';
import { colors } from '../../theme';
import { useStyles } from './styles';

interface IconButtonProps {
  width?: number;
  height?: number;
  children: React.ReactElement;
  onPress?: (event: GestureResponderEvent) => void;
  underlayColor?: ColorValue;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  width,
  height,
  underlayColor = colors.primaryDark13,
}) => {
  const styles = useStyles({ width, height });

  return (
    <TouchableHighlight
      style={styles.root}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  );
};

export default IconButton;
