import { StyleSheet } from 'react-native';

interface UseStylesProps {
  width?: number;
  height?: number;
}

export const useStyles = ({ width, height }: UseStylesProps) =>
  StyleSheet.create({
    root: {
      width: width ?? 30,
      height: height ?? 30,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
