import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoreService } from 'meepo-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';

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
    console.log(e);
    this.core.showAlert({ title: '开发中。。。', content: '详细用法请耐心等待升级' });
  }
}
