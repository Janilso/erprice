import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      backgroundColor: colors.white,
      padding: 16,
      borderRadius: 17,
      shadowColor: colors.black10,
      elevation: 10,
    },
    linearGradient: {
      ...StyleSheet.absoluteFillObject,
    },
  });
