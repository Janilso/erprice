import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

interface UseStylesProps {
  sizeContent: {
    height: number;
    width: number;
  };
}

export const useStyles = ({ sizeContent }: UseStylesProps) =>
  StyleSheet.create({
    coin: {
      paddingTop: 4,
      paddingBottom: 32,
    },
    coinIn: {
      marginTop: 16,
      paddingBottom: 16,
    },
    contentCoins: {
      position: 'relative',
    },
    buttonChange: {
      backgroundColor: colors.primaryMedium,
      borderRadius: 50,
      padding: 10,
      position: 'absolute',
      left: sizeContent.width / 2 - 37,
      top: -30,
    },
  });
