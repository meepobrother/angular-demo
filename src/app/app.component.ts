import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, TemplateRef, ViewChild,
  Input
} from '@angular/core';
import { CoreService, CorePopoverWidget } from 'meepo-core';
import { PopoverService } from 'meepo-popover';
import { UuidService } from 'meepo-uuid';
import { BmapAddressSelectService, BmapService } from 'meepo-bmap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  btnTitle: string = '在这里下单';
  loading: boolean = true;
  postData: any;
  @Input() show: boolean = false;

  sn: string = this.uuid.v1();
  @ViewChild('post') _postTpl: TemplateRef<any>;
  constructor(
    public core: CoreService,
    public cd: ChangeDetectorRef,
    public popover: PopoverService,
    public uuid: UuidService,
    public address: BmapAddressSelectService,
    public bmap: BmapService
  ) {
    
  }

  ngOnInit() {
    this.core.app$.next({
      title: '发布任务'
    });
    this.core.showMenu({
      show: false,
      items: {
        task: {
          show: true,
          cb: () => {
            console.log('task');
          }
        },
        coach: {
          show: true,
          cb: () => {
            console.log('coach');
          }
        },
        shoper: {
          show: true,
          cb: () => {
            console.log('shoper');
          }
        },
        active: {
          show: true,
          cb: () => {
            console.log('active');
          }
        },
        money: {
          show: true,
          cb: () => {
            console.log('money');
          }
        },
        kefu: {
          show: true,
          cb: () => {
            console.log('kefu');
          }
        },
        setting: {
          show: true,
          cb: () => {
            console.log('setting');
          }
        }
      }
    });
  }

  onHome(e: any) {
    this.core.showMenu({ show: true });
  }

  onFinish(e: any) {
    this.postData = e;
    console.log(e);
    const popover = this.popover.create(this._postTpl);
    popover.afterClose().subscribe(res => {
      console.log(res);
    });
    this.show = true;
    this.cd.detectChanges();
  }

  cancel() {
    this.show = false;
    this.cd.detectChanges();
  }
}
