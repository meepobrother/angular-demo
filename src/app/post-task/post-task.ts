import {
    Component, OnInit, Input, Output, EventEmitter,
    ViewEncapsulation, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { CoreService } from 'meepo-core';
import { Subject } from 'rxjs/Subject';
import { PopoverService } from 'meepo-popover';
import { BmapAddressSelectService } from 'meepo-bmap';
import { UuidService } from 'meepo-uuid';
@Component({
    selector: 'post-task',
    templateUrl: 'post-task.html',
    styleUrls: [
        'post-task.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class PostTaskPage implements OnInit, OnDestroy {

    @Input() ctrl: any;
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
    isStart: boolean = false;
    @Input() sn: string = this.uuid.v1();

    @Output() onInit: EventEmitter<any> = new EventEmitter();

    s1$: any;
    s2$: any;

    constructor(
        public popover: PopoverService,
        public address: BmapAddressSelectService,
        public uuid: UuidService,
        public cd: ChangeDetectorRef
    ) {
        this.s1$ = this.width$.asObservable().combineLatest(this.height$.asObservable(), this.length$.asObservable()).subscribe(res => {
            this.form.tiji.value = res[0] * res[1] * res[2];
            console.log(this.form);
        });
    }

    ngOnDestroy() {
        this.s1$.unsubscribe();
        this.s2$.unsubscribe();
    }

    ngOnInit() {
        const sn = this.sn;
        this.s2$ = this.address.show$.subscribe(res => {
            console.log(sn);
            if (sn === res.sn) {
                if (res.isStart) {
                    this._data.start = res.data;
                } else {
                    this._data.end = res.data;
                }
                this.cd.markForCheck();
            }
            console.log(sn === res.sn);
            console.log(sn, res.sn);
        });
    }

    rePickStart() {
        console.log(this.sn);
        this.address.show(this.sn, true);
    }

    rePickEnd() {
        this.isStart = false;
        this.address.show(this.sn, false);
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

    cancel() {
        console.log(this.ctrl);
        this.popover.close(this.ctrl);
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
