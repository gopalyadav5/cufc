import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

    @Input() data : Array<Object>;

    constructor() { }

    ngOnInit() {
        console.log("==dataObject==", this.data);
    }

}
