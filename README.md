# CoinMarket

### How To Setup and Run App
1. Make sure node and yarn already installed (minimum node v16 and yarn v1.22)
2. Clone this repo
3. Run `yarn install`
4. For iOS you can run `yarn ios`, for Android you can run `yarn android`

#### Optional
If you want to install on real devices, please install Expo Go application from App Store & Play Store

### Publishing & Deployment
For publishing the app to expo, you just need to push or merge the PR. It will automatically build and pushed to expo
see: [workflows](.github/workflows/update.yml)

### Things to do & Future Improvement
1. Move redundant styling to global style
2. Unit test
3. Dynamically dark or light mode on component level
4. Update animation handler with `react-native-reanimated`
