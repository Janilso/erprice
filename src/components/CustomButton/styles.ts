import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
    },
    button: {
      width: '100%',
      height: 40,
      borderRadius: 14,
      maxWidth: 275,
    },
    text: {
      ...globalStyles.fontH5Regular,
      color: colors.white,
      fontSize: 16,
    },
  });
