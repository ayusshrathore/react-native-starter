import { AlertCircle, BadgeCheck } from 'lucide-react-native';
import { showMessage } from 'react-native-flash-message';

export const errorMessage = (msg: string) =>
  showMessage({
    message: msg,
    type: 'danger',
    icon: props => <AlertCircle color="white" size={22} strokeWidth={2.5} {...props} />,
  });

export const successMessage = (msg: string) =>
  showMessage({
    message: msg,
    type: 'success',
    icon: props => <BadgeCheck color="white" size={22} strokeWidth={2.5} {...props} />,
  });
