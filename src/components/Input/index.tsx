import { StyleProp, TextInput, TextStyle } from 'react-native';
import { useStyles } from './styles';
import { colors } from '../../theme';

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
}

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder = 'Pesquisar',
  style,
}) => {
  const styles = useStyles();
  return (
    <TextInput
      style={[styles.root, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={colors.primaryMedium50}
    />
  );
};

export default Input;
