import { Component, OnInit, ViewChild  } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
