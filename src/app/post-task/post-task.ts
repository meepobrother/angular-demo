import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'post-task',
    templateUrl: 'post-task.html',
    styleUrls: [
        'post-task.scss'
    ]
})

export class PostTaskPage implements OnInit {
    @Input() data: any;
    constructor() { }

    ngOnInit() { }
}
