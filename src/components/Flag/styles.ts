import { StyleSheet } from 'react-native';

interface UseStylesProps {
  width: number;
  height: number;
}

export const useStyles = (props: UseStylesProps) => {
  const { width, height } = props;
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
    },
  });
};
