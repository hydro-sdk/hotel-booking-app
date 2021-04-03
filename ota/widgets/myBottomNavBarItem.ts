import { FontWeight } from "@hydro-sdk/hydro-sdk/runtime/dart/ui/index";
import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import { Key } from "@hydro-sdk/hydro-sdk/runtime/flutter/foundation/key";
import { Colors } from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import {
    BorderRadius,
    BoxDecoration,
    EdgeInsets,
    TextStyle,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/painting/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    Container,
    GestureDetector,
    Icon,
    IconData,
    Row,
    SizedBox,
    StatelessWidget,
    Text,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

import { MyColors } from "../data";

export class MyBottomNavBarItem extends StatelessWidget {
    public id: number;
    public active: number;
    public function: () => void;
    public text: string;
    public icon: IconData;
    public key: Key;

    public constructor(props: {
        id: number;
        active: number;
        function: () => void;
        text: string;
        icon: IconData;
        key: Key;
    }) {
        super();

        this.id = props.id;
        this.active = props.active;
        this.function = props.function;
        this.text = props.text;
        this.icon = props.icon;
        this.key = props.key;
    }

    public build(context: BuildContext): Widget {
        return new SizedBox({
            key: this.key,
            child: new GestureDetector({
                onTap: this.function,
                child: new Container({
                    padding: EdgeInsets.symmetric({
                        horizontal: 15.0,
                        vertical: 9.0,
                    }),
                    decoration: new BoxDecoration({
                        color:
                            this.active == this.id
                                ? Colors.white
                                : Colors.transparent,
                        borderRadius: BorderRadius.circular(25.0),
                    }),
                    child: new Row({
                        children: [
                            new Icon(this.icon, {
                                color:
                                    this.active == this.id
                                        ? MyColors.darkBlue
                                        : Colors.white,
                            }),
                            new SizedBox({ width: 5 }),
                            this.active == this.id
                                ? new Text(this.text, {
                                      style: new TextStyle({
                                          color: MyColors.darkBlue,
                                          fontWeight: FontWeight.bold,
                                      }),
                                  })
                                : new Container({}),
                        ],
                    }),
                }),
            }),
        });
    }
}
