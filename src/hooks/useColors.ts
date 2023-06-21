import colors from '../config/colors';
import { useUIStore } from '../store/useUIStore';

const useColors = () => {
  const darkMode = useUIStore(state => state.darkMode);
  return darkMode
    ? {
        ...colors,
        offbackground: '#262626',
        background: '#121212',
        text: '#FFFFFF',
        lighttext: '#FFFFFF',
        accent: 'f69cc5',
      }
    : {
        ...colors,
        offbackground: '#F5F5F4',
        background: '#FFFFFF',
        text: '#1b273c',
        lighttext: '#182336',
        accent: '#f69cc5',
      };
};

export default useColors;
