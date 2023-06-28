import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      ...globalStyles.fontH5Regular,
      height: 40,
      borderWidth: 1,
      borderColor: colors.primaryMedium,
      borderRadius: 14,
      paddingLeft: 16,
      color: colors.primaryMedium,
    },
  });
