import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoreService } from 'meepo-core';
import { BmapService, ApiService } from 'meepo-bmap';

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
    public core: CoreService,
    public bmap: BmapService
  ) {

  }

  ngOnInit() {
    this.core.app$.next({
      title: '发布任务'
    });
  }

  onHome(e: any) {
    this.core.showAlert({ title: '开发中。。。', content: '详细用法请耐心等待升级' });
  }

  onFinish(e: any) {
    console.log(e);
    this.core.showAlert({ title: '开发中。。。', content: '详细用法请耐心等待升级' });
  }
}
