import { runApp } from "@hydro-sdk/hydro-sdk/runtime/flutter/runApp";
import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import {
    MaterialApp,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    StatelessWidget,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

import { DetailsScreen } from "./screens/detailsScreen";
import { HomeScreen } from "./screens/homeScreen";

class MyApp extends StatelessWidget {
    public build(): Widget {
        return new MaterialApp({
            title: "Flutter Demo",
            home: new HomeScreen(),
            routes: {
                details: (context: BuildContext) => new DetailsScreen(0),
            },
        });
    }
}

runApp(() => new MyApp());