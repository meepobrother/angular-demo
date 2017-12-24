import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, TemplateRef, ViewChild,
  Input
} from '@angular/core';
import { CoreService, CorePopoverWidget } from 'meepo-core';

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
  constructor(
    public core: CoreService,
    public cd: ChangeDetectorRef
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
    this.postData = e;
    console.log(e);
    this.show = true;
    this.cd.detectChanges();
  }

  cancel() {
    this.show = false;
    this.cd.detectChanges();
  }
}
