import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges{

    @Input() data : Array<Object>;

    constructor() { }

    ngOnInit() {
        this.createTree(this.data);
    }

    ngOnChanges() {
    }

    createTree(data) {
        if (!data || !data.length) {
            return;
        }
    }

}
