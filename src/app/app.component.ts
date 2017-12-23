import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, TemplateRef, ViewChild
} from '@angular/core';
import { CoreService, CorePopoverWidget } from 'meepo-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('postTask') postTask: TemplateRef<any>;
  @ViewChild('footerTpl') footerTpl: TemplateRef<any>;

  btnTitle: string = '在这里下单';
  loading: boolean = true;
  postData: any;
  constructor(
    public core: CoreService
  ) {

  }

  ngOnInit() {
    this.core.app$.next({
      title: '发布任务'
    });
  }

  onHome(e: any) {
    console.log('on home');
    this.core.showMenu({ show: true });
  }

  onFinish(e: any) {
    this.postData = e;
    const list: any[] = [];
    for (const key in this.postData) {
      list.push({ key: key, data: this.postData[key] });
    }
    const cfg: CorePopoverWidget = { headerTpl: null, tpl: this.postTask, list: list, footerTpl: this.footerTpl };
    this.core.showPopover(cfg);
  }
}
