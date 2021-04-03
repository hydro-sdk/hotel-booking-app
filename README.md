# hotel-booking-app
![Action Gif](https://github.com/hydro-sdk/hotel-booking-app/blob/main/media/action-gif.gif)  


This repository is a demonstration of a highly custom UI with Hydro-SDK. This is a direct port of https://github.com/cybdom/hotel_booking_ui

## Setting up
```bash
npm install
flutter pub get
```

## Running
Run `npx hydroc run` in a terminal while debugging `lib/main.dart` with the usual Flutter tools.

## Testing
The widget tests under the `test` directory expect the included Typescript code under `ota` to be built into a `.ota` package and placed in the `assets/ota` directory. Run `npx hydroc build --out-dir assets/ota --profile debug` and then `flutter test`.