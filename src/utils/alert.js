import { Alert } from 'react-native';

export const appAlert = (message, onPressedAction) => {
  Alert.alert(
    '',
    message,
    [
      { text: 'OK', onPress: onPressedAction },
    ],
  );
};
