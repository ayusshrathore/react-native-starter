import Reactotron, { networking } from 'reactotron-react-native';
Reactotron.configure()
  .useReactNative()
  .use(
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /^(?!.*clients3\.google\.com).*\/(logs|symbolicate)$/,
    }),
  )
  .connect();
