import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../theme';

interface UseStylesProps {
  insets: EdgeInsets;
}

export const useStyles = ({ insets }: UseStylesProps) =>
  StyleSheet.create({
    root: {
      paddingTop: insets.top + 10,
      paddingLeft: insets.left + 15,
      paddingRight: insets.right + 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.backGroundPage,
    },
    title: {
      ...globalStyles.fontH3Regular,
      color: colors.primaryMedium,
    },
    icons: {
      width: 30,
    },
  });
