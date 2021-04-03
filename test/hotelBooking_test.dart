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

      expect(find.text("Home"), findsOneWidget);
    });
  });
}
