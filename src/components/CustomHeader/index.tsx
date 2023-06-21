import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from './styles';
import { Icon } from '../../../assets/icons';
import IconButton from '../IconButton';

const CustomHeader: React.FC<NativeStackHeaderProps> = ({
  options,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  const haveGoBack = navigation.canGoBack();

  return (
    <View style={styles.root}>
      <View style={styles.icons}>
        {haveGoBack ? (
          <IconButton onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft />
          </IconButton>
        ) : null}
      </View>
      <Text style={styles.title}>{options?.title ?? ''}</Text>
      <View style={styles.icons}></View>
    </View>
  );
};

export default CustomHeader;
