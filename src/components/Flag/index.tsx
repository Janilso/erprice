import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useStyles } from './styles';

interface FlagProps {
  width?: number;
  height?: number;
  opacity?: number;
  icon: React.FC<SvgProps>;
}

const Flag: React.FC<FlagProps> = ({
  icon: Icon,
  width: widthProps,
  height: heightProps,
  opacity,
}) => {
  const width = widthProps ?? 70;
  const height = heightProps ?? 70;
  const styles = useStyles({ width, height, opacity });

  return (
    <View style={styles.root}>
      <Icon width={width} height={height} />
    </View>
  );
};

export default Flag;
