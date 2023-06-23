import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useStyles } from './styles';

interface FlagProps {
  width?: number;
  height?: number;
  opacity?: number;
  icon: React.FC<SvgProps>;
}

const Flag: React.FC<FlagProps> = ({ icon: Icon, width, height, opacity }) => {
  const styles = useStyles({ width, height, opacity });

  return (
    <View style={styles.root}>
      <Icon />
    </View>
  );
};

export default Flag;
