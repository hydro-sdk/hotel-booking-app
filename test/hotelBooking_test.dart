import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:hydro_sdk/runComponent/runComponent.dart';

class CustomBindings extends LiveTestWidgetsFlutterBinding {
  @override
  bool get overrideHttpClient => false;
}

void main() {
  CustomBindings();
  testWidgets('', (WidgetTester tester) async {
    await tester.runAsync(() async {
      await tester.pumpWidget(const RunComponentFromFile(
          component: "hotel-booking", path: "../assets/ota/hotel-booking.ota"));

      await tester.pumpAndSettle();

      var exception = tester.takeException();
      expect(exception, isNull);

      expect(find.byKey(const Key("home-icon")), findsOneWidget);
      expect(find.byKey(const Key("booked-icon")), findsOneWidget);
      expect(find.byKey(const Key("tickets-icon")), findsOneWidget);
      expect(find.byKey(const Key("profile-icon")), findsOneWidget);

      expect(find.text("Home"), findsOneWidget);

      await tester.tap(find.byKey(const Key("booked-icon")));
      await tester.pumpAndSettle();
      expect(find.text("Home"), findsNothing);
      expect(find.text("Booked"), findsOneWidget);

      await tester.tap(find.byKey(const Key("tickets-icon")));
      await tester.pumpAndSettle();
      expect(find.text("Booked"), findsNothing);
      expect(find.text("Tickets"), findsOneWidget);

      await tester.tap(find.byKey(const Key("profile-icon")));
      await tester.pumpAndSettle();
      expect(find.text("Tickets"), findsNothing);
      expect(find.text("Profile"), findsOneWidget);
    });
  });
}
