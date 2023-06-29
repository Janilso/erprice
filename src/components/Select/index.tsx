import { memo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { useStyles, useStylesItem } from './styles';
import { colors } from '../../theme';
import ReactNativeModal from 'react-native-modal';
import { SvgProps } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from '../Input';
import { removeAccents } from '../../utils/functions';
import { Icon } from '../../../assets/icons';

interface SelectProps {
  coins: Coin[];
  onSelect: (item: Coin, index: number) => void;
}

interface ItemProps {
  coin: Coin;
  index: number;
  selected: boolean;
  onSelect: (coin: Coin) => void;
}

const Item = memo(({ coin, index, selected, onSelect }: ItemProps) => {
  const styles = useStylesItem({ selected });

  const Icon: React.FC<SvgProps> = coin.icon;

  return (
    <TouchableHighlight
      key={index + coin.code}
      underlayColor={selected ? colors.white : colors.primaryDark}
      onPress={() => onSelect(coin)}
    >
      <View style={styles.modalListItem}>
        <Icon width={45} height={50} />
        <Text style={styles.modalListItemText}>{coin.name}</Text>
      </View>
    </TouchableHighlight>
  );
});

const Select: React.FC<SelectProps> = ({ coins, onSelect }) => {
  const heightScreen = Dimensions.get('window').height;
  const insets = useSafeAreaInsets();
  const styles = useStyles({ heightScreen, insets });
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[2]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleSelectItem = (coin: Coin) => {
    const index = coins.findIndex((item) => item.code === coin.code);
    setOpenModal(false);
    onSelect(coin, index);
    setSelectedCoin(coin);
    setSearch('');
  };

  const getItems = () => {
    if (search) {
      const filtered = coins.filter((coin) => {
        const text = removeAccents(
          coin.name.toLowerCase() + coin.code.toLowerCase()
        );
        return text.includes(search);
      });
      return filtered;
    }
    return coins;
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.primaryDark13}
        onPress={handleOpenModal}
      >
        <View style={styles.root}>
          <Text style={styles.text}>{selectedCoin?.name ?? 'Selecione'}</Text>
          <Icon.ChevronDown />
        </View>
      </TouchableHighlight>

      <ReactNativeModal
        isVisible={openModal}
        onBackButtonPress={handleCloseModal}
        onBackdropPress={handleCloseModal}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Selecione a moeda</Text>
          <Input
            style={styles.modalInput}
            onChangeText={(text) =>
              setSearch(removeAccents(text.toLowerCase()))
            }
          />
          <FlatList
            data={getItems()}
            renderItem={({ item, index }) => (
              <Item
                coin={item}
                index={index}
                selected={item.code === selectedCoin?.code}
                onSelect={handleSelectItem}
              />
            )}
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Select;
