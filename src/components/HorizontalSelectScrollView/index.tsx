import React, { createRef, useRef } from 'react';
import { useStyles } from './styles';
import { FlatList, View } from 'react-native';
import Flag from '../Flag';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

interface HorizontalSelectScrollViewProps {
  data: Coin[];
  rowItems?: number;
  toIndex?: number;
  onSelect: (item: any, index: number) => void;
  widthParent: number;
}

const HorizontalSelectScrollView: React.FC<HorizontalSelectScrollViewProps> = ({
  rowItems = 5,
  data,
  toIndex = 0,
  onSelect,
  widthParent: widthParentProps,
}) => {
  const widthParent = parseInt(widthParentProps.toString());
  const size = widthParent / rowItems;
  const sideItems = (rowItems - 1) / 2;

  const styles = useStyles({ size, sideItems, widthParent });
  const scrollViewRef = createRef<FlatList>();
  const isParkingRef = useRef<boolean>(false);

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const transX = useSharedValue(0);

  const handleCalculateLayout = () => {
    if (toIndex === 0) {
      scrollViewRef.current?.scrollToOffset({
        offset: size / 5,
        animated: false,
      });
    } else if (toIndex === 1) {
      scrollViewRef.current?.scrollToOffset({
        offset: size,
        animated: false,
      });
    } else {
      scrollViewRef.current?.scrollToIndex({
        index: toIndex - 2,
        animated: false,
      });
    }
  };

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x;
    },
  });

  const handleSelectItem = () => {
    const index = Math.abs(Math.round(transX.value / size));
    const selected = index === data.length ? index - 1 : index;
    onSelect(data[selected], selected);
    return selected;
  };

  const handleParking = () => {
    isParkingRef.current = true;

    setTimeout(() => {
      if (isParkingRef.current) {
        const index = handleSelectItem();
        isParkingRef.current = false;
        if (scrollViewRef?.current) {
          scrollViewRef.current.scrollToIndex({
            index,
          });
        }
        onSelect(data[index], index);
      }
    }, 150);
  };

  const handleCancelParking = () => {
    isParkingRef.current = false;
  };

  const handleScrollError = (error: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    const offset = error.averageItemLength * error.index;
    scrollViewRef.current?.scrollToOffset({ offset });
    setTimeout(
      () => scrollViewRef.current?.scrollToIndex({ index: error.index }),
      100
    );
  };

  return (
    <View style={styles.timelineContainer}>
      <AnimatedFlatList
        horizontal
        renderItem={({ item, index }) => {
          return (
            <Flag
              coin={item as Coin}
              index={index}
              sizeContent={size}
              key={index}
              transX={transX}
            />
          );
        }}
        data={data}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        onLayout={handleCalculateLayout}
        snapToInterval={size}
        onScroll={handleScroll}
        onTouchEnd={handleParking}
        onScrollEndDrag={handleParking}
        scrollEventThrottle={16}
        onMomentumScrollBegin={handleCancelParking}
        onMomentumScrollEnd={handleSelectItem}
        contentContainerStyle={styles.contentContainerStyle}
        onScrollToIndexFailed={handleScrollError}
      />
    </View>
  );
};

export default HorizontalSelectScrollView;
