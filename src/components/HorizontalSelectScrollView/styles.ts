import { StyleSheet } from 'react-native';

interface UseStylesProps {
  size: number;
  sideItems: number;
  widthParent: number;
}

export const useStyles = ({ size, sideItems, widthParent }: UseStylesProps) =>
  StyleSheet.create({
    timelineContainer: {
      flexGrow: 0,
      flexDirection: 'row',
      width: widthParent,
    },
    contentContainerStyle: {
      paddingLeft: size * sideItems,
      paddingRight: size * sideItems,
    },
  });
