import { memo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { useStyles, useStylesItem } from './styles';
import { colors } from '../../theme';
import ReactNativeModal from 'react-native-modal';
import { SvgProps } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from '../Input';

interface SelectProps {
  coins: Coin[];
  onSelect: (item: Coin, index: number) => void;
}

interface ItemProps {
  item: Coin;
  index: number;
  selected: boolean;
  onSelect: (item: Coin, index: number) => void;
}

const Item = memo(({ item, index, selected, onSelect }: ItemProps) => {
  const styles = useStylesItem({ selected });

  const Icon: React.FC<SvgProps> = item.icon;

  return (
    <TouchableHighlight
      key={index + item.code}
      underlayColor={selected ? colors.white : colors.primaryDark}
      onPress={() => onSelect(item, index)}
    >
      <View style={styles.modalListItem}>
        <Icon width={45} height={50} />
        <Text style={styles.modalListItemText}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
});

const Select: React.FC<SelectProps> = ({ coins, onSelect }) => {
  const heightScreen = Dimensions.get('window').height;
  const insets = useSafeAreaInsets();
  const styles = useStyles({ heightScreen, insets });
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[3]);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleSelectItem = (item: Coin, index: number) => {
    setSelectedCoin(item);
    setOpenModal(false);
    onSelect(item, index);
  };

  return (
    <View>
      <TouchableHighlight
        underlayColor={colors.primaryDark13}
        onPress={handleOpenModal}
      >
        <Text>{selectedCoin?.name ?? 'Selecione'}</Text>
      </TouchableHighlight>

      <ReactNativeModal
        isVisible={openModal}
        onBackButtonPress={handleCloseModal}
        onBackdropPress={handleCloseModal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Selecione a moeda</Text>
          <Input
            style={styles.modalInput}
            onChangeText={(text) => setSearch(text)}
          />
          <FlatList
            data={coins}
            renderItem={({ item, index }) => (
              <Item
                item={item}
                index={index}
                selected={item.code === selectedCoin?.code}
                onSelect={handleSelectItem}
              />
            )}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Select;
