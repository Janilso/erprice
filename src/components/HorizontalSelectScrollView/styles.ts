import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

interface UseStylesProps {
  size: number;
  sideItems: number;
  widthParent: number;
}

export const useStyles = (props: UseStylesProps) => {
  const { size, sideItems, widthParent } = props;

  return StyleSheet.create({
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
};
