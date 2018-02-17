import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    jsonObject = [{
        "toDisplay": "Master",
        "child": [{

            "toDisplay" : "Parent",
            "child": [{
                "toDisplay" : "GrandChild1",
                "child": [{
                    "toDisplay" : "Child1",
                    "child": [{
                        "toDisplay" : "Child1"},{
                        "toDisplay" : "Child2"},{
                        "toDisplay" : "Child3"}
                    ]
                },{
                    "toDisplay" : "Child2"},{
                    "toDisplay" : "Child3"}
                ]}]

        },
            {

                "toDisplay" : "Parent",
                "child": [{
                    "toDisplay" : "GrandChild1",
                    "child": [{
                        "toDisplay" : "Child1"},{
                        "toDisplay" : "Child2",
                        "child": [{
                            "toDisplay" : "Child1"},{
                            "toDisplay" : "Child2"},{
                            "toDisplay" : "Child3"}
                        ]},{
                        "toDisplay" : "Child3",
                        "child": [{
                            "toDisplay" : "Child1"},{
                            "toDisplay" : "Child2",
                            "child": [{
                                "toDisplay" : "Child1"},{
                                "toDisplay" : "Child2"},{
                                "toDisplay" : "Child3"}
                            ]},{
                            "toDisplay" : "Child3",


                        }
                        ]



                    }
                    ]}]

            },
            {

                "toDisplay" : "Parent",
                "child": [{
                    "toDisplay" : "GrandChild1",
                    "child": [{
                        "toDisplay" : "Child1"},{
                        "toDisplay" : "Child2"},{
                        "toDisplay" : "Child3"}
                    ]}]

            },
            {

                "toDisplay" : "Parent",
                "child": [{
                    "toDisplay" : "GrandChild1",
                    "child": [{
                        "toDisplay" : "Child1"},{
                        "toDisplay" : "Child2"},{
                        "toDisplay" : "Child3"}
                    ]}]

            }

        ]
    }];

}
