import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useStyles } from './styles';
import SmoothPicker from 'react-native-smooth-picker';
import { memo, useMemo, useState } from 'react';
import Flag from '../Flag';

interface SelectCoinProps {
  coins: Coin[];
}

type SelectedItem = Coin & {
  index: number;
};

const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
    flexDirection: 'row',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
});

const dataCity = [
  'Paris',
  'Berlin',
  'Lisbonne',
  'Budapest',
  'Londres',
  'Prague',
  'Rome',
  'Barcelone',
  'Amsterdam',
  'Dublin',
  'Vienne',
  'Madrid',
  'Cracovie',
  'Reykjavik',
  'Istambul',
  'Florence',
  'Copenhague',
  'Zagreb',
  'Stockholm',
  'Thessalonique',
  'Marseille',
  'Porto',
  'Lugano',
  'Bruxelles',
  'Lyon',
];

// const Item = memo(({ opacity, selected, vertical, fontSize, name }) => {
//   return (
//     <View
//       style={[
//         styles.OptionWrapper,
//         {
//           opacity,
//           borderColor: selected ? '#ABC9AF' : 'transparent',
//           width: vertical ? 190 : 'auto',
//         },
//       ]}
//     >
//       <Text style={{ fontSize }}>{name}</Text>
//     </View>
//   );
// });

// const opacities = {
//   0: 1,
//   1: 1,
//   2: 0.6,
//   3: 0.3,
//   4: 0.1,
// };

// const Render = ({ item, index }, indexSelected, vertical) => {
//   const selected = index === indexSelected;
//   const gap = Math.abs(index - indexSelected);

//   let opacity = opacities[gap];
//   if (gap > 3) {
//     opacity = opacities[4];
//   }
//   let fontSize = sizeText[gap];
//   if (gap > 1) {
//     fontSize = sizeText[2];
//   }

//   return (
//     <Item
//       opacity={opacity}
//       selected={selected}
//       vertical={vertical}
//       fontSize={fontSize}
//       name={item}
//     />
//   );
// };

const Item = memo(() => {
  return (
    <View style={{ width: 50, height: 50 }}>
      <Text>Texts</Text>
    </View>
  );
});

const SelectCoin: React.FC<SelectCoinProps> = ({ coins }) => {
  const styles = useStyles();
  const [selected, setSelected] = useState<SelectedItem>();

  const renderItem = (item: Coin) => {
    // const { item, index } = option;

    // const isSelected = index === selected;
    // const gap = Math.abs(index - selected);

    // let opacity = opacities[gap];
    // if (gap > 3) {
    //   opacity = opacities[4];
    // }
    // let fontSize = sizeText[gap];
    // if (gap > 1) {
    //   fontSize = sizeText[2];
    // }

    return <Flag icon={item.icon} />;
  };

  return (
    <View style={styles.root}>
      <Text>My select </Text>

      <View>
        {/* <SmoothPicker
          initialScrollToIndex={0}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={coins}
          scrollAnimation
          onSelected={({ item, index }) => {
            console.log('item', item, index);
            setSelected({ ...item, index });
          }}
          renderItem={renderItem}
          //   renderItem={(option) => ItemToRender(option, selected, false)}
          magnet
          horizontal
          selectOnPress
        /> */}
        <FlatList
          data={coins}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => item.name + index}
          horizontal
          // numColumns={3}
        />
      </View>
      {/* <View>
        <Text>{`Your selection is ${dataCity[selected]}`}</Text>
      </View> */}
    </View>
  );
};

export default SelectCoin;
