import { StyleSheet } from 'react-native';

interface UseStylesProps {
  width?: number;
  height?: number;
}

export const useStyles = (props: UseStylesProps) => {
  const { width, height } = props;
  return StyleSheet.create({
    root: {
      width: width ?? 30,
      height: height ?? 30,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
