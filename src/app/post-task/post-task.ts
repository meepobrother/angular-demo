import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'meepo-core';
import { Subject } from 'rxjs/Subject';
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

    width$: Subject<any> = new Subject();
    length$: Subject<any> = new Subject();
    height$: Subject<any> = new Subject();

    form: any = {
        weight: {
            show: false,
            value: ''
        },
        tiji: {
            show: false,
            width: '',
            height: '',
            length: '',
            value: ''
        }
    };
    @Input()
    set data(val: any) {
        if (val) {
            this._data = val;
        }
    }
    get data() {
        return this._data;
    }

    constructor() {
        this.width$.asObservable().combineLatest(this.height$.asObservable(), this.length$.asObservable()).subscribe(res => {
            this.form.tiji.value = res[0] * res[1] * res[2];
            console.log(this.form);
        });
    }

    ngOnInit() {

    }

    widthChange($event) {
        this.width$.next($event);
    }
    heightChange($event) {
        this.height$.next($event);
    }
    lengthChange($event) {
        this.length$.next($event);
    }

    changeTiji(e: any) {
        console.log(e);
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
