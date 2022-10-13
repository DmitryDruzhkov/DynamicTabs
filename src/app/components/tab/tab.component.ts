import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('tabHeader') public tabHeader!: TemplateRef<any>;
  @ViewChild('tabContent') public tabContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(`app-tab`)
  }

  ngAfterViewInit(): void {
    console.log(this.tabHeader);
    console.log(this.tabContent);
  }

}
