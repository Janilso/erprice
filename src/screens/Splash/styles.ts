import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../theme';

export const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
