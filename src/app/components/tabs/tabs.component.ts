import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @ContentChildren(TabComponent) private tabComponents!: QueryList<TabComponent>;

  public tabTemplates: TemplateRef<any>[] =[];
  public tabContentTemplates: TemplateRef<any>[] = [];
  public tabContent!: TemplateRef<any>;

  private destroy$: Subject<void> = new Subject<void>()

  constructor(private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.tabComponents.forEach((component: TabComponent) => {
      this.tabTemplates.push(component.tabHeader);
      this.tabContentTemplates.push(component.tabContent);
      this.setClickListener(component);
    })

    this.tabContentTemplates.length > 0 && this.setActiveTabContent(this.tabContentTemplates[0]);

    this.cdr.detectChanges();
  }

  public onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setClickListener(component: TabComponent): void {
    component.onClick.pipe(takeUntil(this.destroy$)).subscribe(() => this.setActiveTabContent(component.tabContent));
  }

  private setActiveTabContent(tabContent: TemplateRef<any>): void {
    this.tabContent = tabContent;
    this.cdr.detectChanges();
  }
}
