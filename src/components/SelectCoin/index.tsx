import { Dimensions, LayoutChangeEvent, Text, View } from 'react-native';
import { useStyles } from './styles';
import { useState } from 'react';
import HorizontalSelectScrollView from '../HorizontalSelectScrollView';
import Select from '../Select';

interface SelectCoinProps {
  coins: Coin[];
}

const SelectCoin: React.FC<SelectCoinProps> = ({ coins }) => {
  const styles = useStyles();
  const [widthParent, setWidthParent] = useState(
    () => Dimensions.get('window').width
  );

  return (
    <View
      style={styles.root}
      onLayout={(e: LayoutChangeEvent) => {
        setWidthParent(e.nativeEvent.layout.width - 32);
      }}
    >
      <Select
        coins={coins}
        onSelect={(item, index) => {
          console.log('Select', item, index);
        }}
      />

      <View>
        <HorizontalSelectScrollView
          widthParent={widthParent}
          data={coins}
          onSelect={(item, index) => {
            console.log('HorizontalSelectScrollView', item, index);
          }}
        />
      </View>
    </View>
  );
};

export default SelectCoin;
