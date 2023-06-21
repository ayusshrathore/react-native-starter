import {
  heightPercentageToDP as hpPercentage,
  widthPercentageToDP as wpPercentage,
} from 'react-native-responsive-screen';

export const wp = (percentage: number) => {
  return wpPercentage(percentage);
};

export const hp = (percentage: number) => {
  return hpPercentage(percentage);
};
