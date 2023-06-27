import { View, ViewToken } from 'react-native';
import { useStyles } from './styles';
import { memo } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface FlagProps {
  sizeContent: number;
  index: number;
  coin: Coin;
  transX: Animated.SharedValue<number>;
}

const Flag: React.FC<FlagProps> = ({
  coin,
  sizeContent = 70,
  index,
  transX,
}) => {
  const styles = useStyles({
    width: sizeContent,
    height: sizeContent,
  });

  const configureAnimation = (
    transitionX: Animated.SharedValue<number>,
    output: number[]
  ) => {
    'worklet';

    const input = [
      (index - 2) * sizeContent,
      (index - 1) * sizeContent,
      index * sizeContent,
      (index + 1) * sizeContent,
      (index + 2) * sizeContent,
    ];

    return interpolate(transitionX.value, input, output, Extrapolate.CLAMP);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginLeft: configureAnimation(transX, [0, 12, 0, -12, 0]),
      opacity: configureAnimation(transX, [0.2, 0.4, 1, 0.4, 0.2]),
      transform: [
        {
          scale: configureAnimation(transX, [0.6, 0.8, 1, 0.8, 0.6]),
        },
      ],
    };
  }, []);

  const Icon = coin.icon;

  return (
    <View style={styles.root}>
      <Animated.View style={animatedStyle}>
        <Icon width={sizeContent} height={sizeContent} />
      </Animated.View>
    </View>
  );
};

export default memo(Flag);
