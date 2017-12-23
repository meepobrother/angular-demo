import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'post-task',
    templateUrl: 'post-task.html',
    styleUrls: [
        'post-task.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

export class PostTaskPage implements OnInit {
    key: string = '';
    item: any;
    @Input()
    set data(val: any) {
        const { key, data } = val;
        this.key = key;
        this.item = data;
    }
    constructor() { }

    ngOnInit() {

    }
}
