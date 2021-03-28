import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import { Icons } from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    MainAxisAlignment,
    Row,
    State,
    StatefulWidget,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

import { MyBottomNavBarItem } from "./myBottomNavBarItem";

export class MyBottomNavBar extends StatefulWidget {
    public createState(): MyBottomNavBarState {
        return new MyBottomNavBarState();
    }
}

class MyBottomNavBarState extends State<MyBottomNavBar> {
    private active = 0;

    public dispose() {}

    public initState() {}

    public build(context: BuildContext): Widget {
        return new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
                new MyBottomNavBarItem({
                    active: this.active,
                    id: 0,
                    icon: Icons.home,
                    text: "Home",
                    function: () => {
                        this.setState(() => {
                            this.active = 0;
                        });
                    },
                }),
                new MyBottomNavBarItem({
                    active: this.active,
                    id: 1,
                    icon: Icons.book,
                    text: "Booked",
                    function: () => {
                        this.setState(() => {
                            this.active = 1;
                        });
                    },
                }),
                new MyBottomNavBarItem({
                    active: this.active,
                    id: 2,
                    icon: Icons.flight,
                    text: "Tickets",
                    function: () => {
                        this.setState(() => {
                            this.active = 2;
                        });
                    },
                }),
                new MyBottomNavBarItem({
                    active: this.active,
                    id: 3,
                    icon: Icons.person,
                    text: "Profile",
                    function: () => {
                        this.setState(() => {
                            this.active = 3;
                        });
                    },
                }),
            ],
        });
    }
}
