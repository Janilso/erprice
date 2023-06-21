import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../theme';

export const useSstyles = () =>
  StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    root: {
      flex: 1,
    },
    title: {
      ...globalStyles.fontH3Medium,
      color: colors.white,
      textTransform: 'uppercase',
      marginTop: 5,
    },
    subtitle: {
      ...globalStyles.fontH6Regular,
      color: colors.white,
      textTransform: 'uppercase',
      marginTop: 16,
    },
    indicator: {
      position: 'absolute',
      bottom: 50,
    },
  });
