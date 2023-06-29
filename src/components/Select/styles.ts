import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../theme';
import { EdgeInsets } from 'react-native-safe-area-context';

interface UseStylesProps {
  heightScreen: number;
  insets: EdgeInsets;
}
interface UseStylesItemProps {
  selected: boolean;
}

export const useStyles = ({ heightScreen, insets }: UseStylesProps) =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      paddingVertical: 12,
    },
    text: {
      ...globalStyles.fontH6Regular,
      color: colors.primaryMedium,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
      paddingTop: 30,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      height: heightScreen * 0.5,
      backgroundColor: colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    modalText: {
      ...globalStyles.fontH5Medium,
      color: colors.primaryDark,
      marginBottom: 24,
      paddingHorizontal: 30,
    },
    modalInput: { marginBottom: 12, marginHorizontal: 30 },
    modalListItem: {
      paddingHorizontal: 30,
      paddingVertical: 4,
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
    },
    modalListItemActive: {
      backgroundColor: colors.primaryMedium,
    },
    modalListItemText: {
      ...globalStyles.fontH5Regular,
      color: colors.primaryMedium,
    },
    modalListItemTextActive: {
      color: colors.white,
    },
  });

export const useStylesItem = ({ selected }: UseStylesItemProps) =>
  StyleSheet.create({
    modalListItem: {
      paddingHorizontal: 30,
      paddingVertical: 4,
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
      backgroundColor: selected ? colors.primaryMedium : colors.white,
    },
    modalListItemText: {
      ...globalStyles.fontH5Regular,
      color: selected ? colors.white : colors.primaryMedium,
    },
  });
