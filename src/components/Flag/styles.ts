import { StyleSheet } from 'react-native';

interface UseStylesProps {
  width: number;
  height: number;
}

export const useStyles = ({ width, height }: UseStylesProps) =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
    },
  });
