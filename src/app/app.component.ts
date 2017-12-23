import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, TemplateRef, ViewChild
} from '@angular/core';
import { CoreService } from 'meepo-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('postTask') postTask: TemplateRef<any>;
  btnTitle: string = '在这里下单';

  loading: boolean = true;

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
    this.core.showMenu({ show: true });
  }

  onFinish(e: any) {
    const cfg: any = { tpl: this.postTask };
    this.core.showPopover(cfg);
  }
}
