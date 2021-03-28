import { Color, FontWeight, Radius } from "@hydro-sdk/hydro-sdk/runtime/dart/ui/index";
import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import {
    Colors,
    IconButton,
    Icons,
    MaterialPageRoute,
    Scaffold,
    Theme,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { Alignment, Axis, BorderRadius, BoxDecoration, BoxFit, EdgeInsets, TextSpan, TextStyle } from "@hydro-sdk/hydro-sdk/runtime/flutter/painting/index";
import { CrossAxisAlignment } from "@hydro-sdk/hydro-sdk/runtime/flutter/rendering/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    Align,
    ClipRRect,
    Column,
    Container,
    Flexible,
    GestureDetector,
    Icon,
    Image,
    ListView,
    MediaQuery,
    Padding,
    Positioned,
    RichText,
    Row,
    SafeArea,
    SizedBox,
    Navigator,
    Spacer,
    Stack,
    StatelessWidget,
    Text,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

import { MyColors, User, destinationList } from "../data";
import { MyBottomNavBar } from "../widgets/myBottomNavBar";
import { DetailsScreen } from "./detailsScreen";

export class HomeScreen extends StatelessWidget {
    public build(context: BuildContext): Widget {
        return new Scaffold({
            backgroundColor: new Color(0xff2446a6),
            body: new SafeArea({
                child: new Stack({
                    children: [
                        new Positioned({
                            left: 0,
                            right: 0,
                            top: 0,
                            height: MediaQuery.of(context).size.getHeight() / 3,
                            child: new Row({
                                children: [
                                    new Flexible({
                                        flex: 3,
                                        child: new Container({
                                            color: new Color(0xff4169d8),
                                        }),
                                    }),
                                    new Flexible({
                                        flex: 1,
                                        child: new Container({
                                            color: new Color(0xff3a5fc8),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        new Positioned({
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 70,
                            child: new Padding({
                                padding: EdgeInsets.all(15),
                                child: new Column({
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                        new Spacer({}),
                                        new Text("My Profile", {
                                            style: Theme.of(
                                                context
                                            ).textTheme.display1.apply({
                                                color: Colors.white,
                                            }),
                                        }),
                                        new SizedBox({
                                            height: 15,
                                        }),
                                        new ClipRRect({
                                            borderRadius: BorderRadius.circular(
                                                15.0
                                            ),
                                            child: new Container({
                                                decoration: new BoxDecoration({
                                                    color: Colors.white,
                                                }),
                                                child: new Column({
                                                    crossAxisAlignment:
                                                        CrossAxisAlignment.start,
                                                    children: [
                                                        new SizedBox({
                                                            height: 15.0,
                                                        }),
                                                        new Padding({
                                                            padding: EdgeInsets.symmetric(
                                                                {
                                                                    horizontal: 15.0,
                                                                }
                                                            ),
                                                            child: new Row({
                                                                children: [
                                                                    new ClipRRect(
                                                                        {
                                                                            borderRadius: BorderRadius.circular(
                                                                                5
                                                                            ),
                                                                            child: Image.network(
                                                                                User.profilePicture,
                                                                                {
                                                                                    fit:
                                                                                        BoxFit.cover,
                                                                                    height: 35,
                                                                                    width: 35,
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                    new SizedBox(
                                                                        {
                                                                            width: 15.0,
                                                                        }
                                                                    ),
                                                                    new Text(
                                                                        User.fullname,
                                                                        {
                                                                            style: Theme.of(
                                                                                context
                                                                            ).textTheme.headline.apply(
                                                                                {
                                                                                    color:
                                                                                        MyColors.darkBlue,
                                                                                    fontWeightDelta: 2,
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                    new Spacer(
                                                                        {}
                                                                    ),
                                                                    new IconButton(
                                                                        {
                                                                            icon: new Icon(
                                                                                Icons.menu,
                                                                                {
                                                                                    color:
                                                                                        MyColors.red,
                                                                                }
                                                                            ),
                                                                            onPressed: () =>
                                                                                null,
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        }),
                                                        new SizedBox({
                                                            height: 15.0,
                                                        }),
                                                        new Padding({
                                                            padding: EdgeInsets.symmetric(
                                                                {
                                                                    horizontal: 15.0,
                                                                }
                                                            ),
                                                            child: new RichText(
                                                                {
                                                                    text: new TextSpan(
                                                                        {
                                                                            children: [
                                                                                new TextSpan(
                                                                                    {
                                                                                        text:
                                                                                            "3191",
                                                                                        style: Theme.of(
                                                                                            context
                                                                                        ).textTheme.headline.apply(
                                                                                            {
                                                                                                color:
                                                                                                    MyColors.darkBlue,
                                                                                                fontWeightDelta: 2,
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                                new TextSpan(
                                                                                    {
                                                                                        text:
                                                                                            "Travelers points",
                                                                                        style: Theme.of(
                                                                                            context
                                                                                        ).textTheme.body2.apply(
                                                                                            {
                                                                                                color:
                                                                                                    MyColors.darkBlue,
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                        }
                                                                    ),
                                                                }
                                                            ),
                                                        }),
                                                        new SizedBox({
                                                            height: 15.0,
                                                        }),
                                                        new Container({
                                                            padding: EdgeInsets.all(
                                                                25.0
                                                            ),
                                                            color: MyColors.red,
                                                            child: new Row({
                                                                crossAxisAlignment:
                                                                    CrossAxisAlignment.start,
                                                                children: [
                                                                    new Align({
                                                                        alignment:
                                                                            Alignment.center,
                                                                        child: new Text(
                                                                            "My next trip",
                                                                            {
                                                                                style: Theme.of(
                                                                                    context
                                                                                ).textTheme.headline.apply(
                                                                                    {
                                                                                        color:
                                                                                            Colors.white,
                                                                                    }
                                                                                ),
                                                                            }
                                                                        ),
                                                                    }),
                                                                    new Spacer(
                                                                        {}
                                                                    ),
                                                                    new Text(
                                                                        "28",
                                                                        {
                                                                            style: Theme.of(
                                                                                context
                                                                            ).textTheme.headline.apply(
                                                                                {
                                                                                    color:
                                                                                        Colors.white,
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                    new Text(
                                                                        "Nov",
                                                                        {
                                                                            style: Theme.of(
                                                                                context
                                                                            ).textTheme.body1.apply(
                                                                                {
                                                                                    color:
                                                                                        Colors.white,
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        new Spacer({}),
                                        new Text("My Bookings", {
                                            style: Theme.of(
                                                context
                                            ).textTheme.display1.apply({
                                                color: Colors.white,
                                            }),
                                        }),
                                        new SizedBox({
                                            height: 15,
                                        }),
                                        new Container({
                                            height:
                                                MediaQuery.of(
                                                    context
                                                ).size.getHeight() / 4,
                                            child: ListView.builder({
                                                scrollDirection:
                                                    Axis.horizontal,
                                                itemCount:
                                                    destinationList.length,
                                                itemBuilder: (
                                                    context: BuildContext,
                                                    index: number
                                                ) => {
                                                    return new GestureDetector({
                                                        onTap: () => {
                                                            Navigator.push(
                                                                context,
                                                                new MaterialPageRoute(
                                                                    {
                                                                        builder: (
                                                                            context: BuildContext
                                                                        ) =>
                                                                            new DetailsScreen(
                                                                                index
                                                                            ),
                                                                    }
                                                                )
                                                            );
                                                        },
                                                        child: new Container({
                                                            width: 150,
                                                            margin: EdgeInsets.symmetric(
                                                                {
                                                                    horizontal: 11.0,
                                                                }
                                                            ),
                                                            child: new ClipRRect(
                                                                {
                                                                    borderRadius: BorderRadius.circular(
                                                                        15.0
                                                                    ),
                                                                    child: new Stack(
                                                                        {
                                                                            children: [
                                                                                Positioned.fill(
                                                                                    {
                                                                                        child: Image.network(
                                                                                            destinationList[
                                                                                                index
                                                                                            ]
                                                                                                .imageUrl,
                                                                                            {
                                                                                                fit:
                                                                                                    BoxFit.cover,
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                                new Positioned(
                                                                                    {
                                                                                        bottom: 0,
                                                                                        left: 0,
                                                                                        right: 0,
                                                                                        child: new Container(
                                                                                            {
                                                                                                padding: EdgeInsets.symmetric(
                                                                                                    {
                                                                                                        horizontal: 9.0,
                                                                                                        vertical: 5.0,
                                                                                                    }
                                                                                                ),
                                                                                                decoration: new BoxDecoration(
                                                                                                    {
                                                                                                        color:
                                                                                                            MyColors.lighterBlue,
                                                                                                        borderRadius: BorderRadius.only(
                                                                                                            {
                                                                                                                topRight: Radius.circular(
                                                                                                                    15
                                                                                                                ),
                                                                                                            }
                                                                                                        ),
                                                                                                    }
                                                                                                ),
                                                                                                child: new Column(
                                                                                                    {
                                                                                                        crossAxisAlignment:
                                                                                                            CrossAxisAlignment.start,
                                                                                                        children: [
                                                                                                            new Text(
                                                                                                                destinationList[
                                                                                                                    index
                                                                                                                ].placeName,
                                                                                                                {
                                                                                                                    style: new TextStyle(
                                                                                                                        {
                                                                                                                            fontSize: 17,
                                                                                                                            fontWeight:
                                                                                                                                FontWeight.bold,
                                                                                                                            color:
                                                                                                                                Colors.white,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                }
                                                                                                            ),
                                                                                                            new Text(
                                                                                                                destinationList[
                                                                                                                    index
                                                                                                                ].date,
                                                                                                                {
                                                                                                                    style: Theme.of(
                                                                                                                        context
                                                                                                                    ).textTheme.subtitle.apply(
                                                                                                                        {
                                                                                                                            color:
                                                                                                                                Colors.white,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                    }
                                                                                                ),
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                            ],
                                                                        }
                                                                    ),
                                                                }
                                                            ),
                                                        }),
                                                    });
                                                },
                                            }),
                                        }),
                                        new Spacer({}),
                                    ],
                                }),
                            }),
                        }),
                        new Positioned({
                            bottom: 0,
                            height: 70,
                            left: 0,
                            right: 0,
                            child: new Padding({
                                padding: EdgeInsets.all(11.0),
                                child: new MyBottomNavBar(),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }
}