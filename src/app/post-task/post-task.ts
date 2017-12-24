import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'meepo-core';
@Component({
    selector: 'post-task',
    templateUrl: 'post-task.html',
    styleUrls: [
        'post-task.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class PostTaskPage implements OnInit {
    _data: PostTaskData = new PostTaskData();
    @Input()
    set data(val: any) {
        if (val) {
            this._data = val;
        }
    }
    get data() {
        return this._data;
    }

    constructor() { }

    ngOnInit() {

    }
}

export class PostTaskData {
    type: any = {};
    title: any = {};
    timePrice: any = {};
    juliItems: any[] = [];
    start: any = {};
    end: any = {};
    duration: number = 0;
    distance: number = 0;
    create_time: Date = new Date();
}
