import { StyleSheet } from 'react-native';

interface UseStylesProps {
  width?: number;
  height?: number;
  opacity?: number;
}

export const useStyles = (props: UseStylesProps) => {
  const { width, height, opacity } = props;
  return StyleSheet.create({
    root: {
      width: width ?? 70,
      height: height ?? 70,
      opacity: opacity ?? 1,
    },
  });
};
