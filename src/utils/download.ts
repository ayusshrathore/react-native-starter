import dayjs from 'dayjs';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import RNFetchBlob from 'rn-fetch-blob';

export const download = (url: string, token: string) => {
  const { dirs } = RNFetchBlob.fs;
  const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
  const configfb = {
    fileCache: true,
    useDownloadManager: true,
    notification: true,
    mediaScannable: true,
    title: `Ticket-${dayjs()}.pdf`,
    path: `${dirToSave}/Ticket-${dayjs()}.pdf`,
  };
  const configOptions = Platform.select({
    ios: {
      fileCache: configfb.fileCache,
      title: configfb.title,
      path: configfb.path,
      useDownloadManager: false,
      notification: true,
      mediaScannable: true,
    },
    android: configfb,
  });

  if (configOptions) {
    RNFetchBlob.config(configOptions)
      .fetch('POST', url, {
        Authorization: `Bearer ${token}`,
      })
      .then(res => {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Ticket downloaded successfully',
          onHide: () => {
            if (Platform.OS === 'ios') {
              RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
              RNFetchBlob.ios.previewDocument(configfb.path);
            }
            if (Platform.OS === 'android') {
              RNFetchBlob.android.actionViewIntent(configfb.path, 'application/pdf');
            }
          },
        });

        console.log('🚀 ~ ticket downloaded ~', res);
      })
      .catch(e => {
        console.log('🚀 ~ ticket download error ~', e.message);
      });
  }
};
