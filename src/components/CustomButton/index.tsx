import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { colors } from '../../theme';
import { useStyles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

// ViewStyle | TextStyle | ImageStyle
interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  const styles = useStyles();

  //   return <Button title={title} onPress={onPress} color={colors.primaryLight} />;
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} style={styles.button}>
        <LinearGradient
          colors={[colors.primaryMedium, colors.primaryLight]}
          style={styles.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  );
};

export default CustomButton;
