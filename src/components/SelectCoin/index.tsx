import {
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { useStyles } from './styles';
import { ReactNode, useState } from 'react';
import HorizontalSelectScrollView from '../HorizontalSelectScrollView';
import Select from '../Select';

interface SelectCoinProps {
  coins: Coin[];
  onSelect: (item: any, index: number) => void;
  style?: StyleProp<ViewStyle>;
  topContent?: ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const SelectCoin: React.FC<SelectCoinProps> = ({
  coins,
  onSelect,
  style,
  topContent,
  onLayout = () => {},
}) => {
  const styles = useStyles();
  const [selectedIndexCoin, setSelectedIndexCoin] = useState(2);
  const [widthParent, setWidthParent] = useState(
    () => Dimensions.get('window').width
  );

  return (
    <View
      style={[styles.root, style]}
      onLayout={(e: LayoutChangeEvent) => {
        setWidthParent(e.nativeEvent.layout.width - 32);
        onLayout(e);
      }}
    >
      {topContent ? topContent : null}
      <Select
        coins={coins}
        onSelect={(coin: Coin, index: number) => {
          onSelect(coin, index);
          setSelectedIndexCoin(index);
        }}
      />

      <HorizontalSelectScrollView
        widthParent={widthParent}
        toIndex={selectedIndexCoin}
        data={coins}
        onSelect={(coin, index) => {
          onSelect(coin, index);
        }}
      />
    </View>
  );
};

export default SelectCoin;
