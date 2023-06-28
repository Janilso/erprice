import { GestureResponderEvent, TouchableHighlight } from 'react-native';
import { colors } from '../../theme';
import { useStyles } from './styles';

interface IconButtonProps {
  width?: number;
  height?: number;
  children: React.ReactElement;
  onPress?: (event: GestureResponderEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  width,
  height,
}) => {
  const styles = useStyles({ width, height });

  return (
    <TouchableHighlight
      style={styles.root}
      underlayColor={colors.primaryDark13}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  );
};

export default IconButton;
