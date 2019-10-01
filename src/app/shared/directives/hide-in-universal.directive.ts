import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';
import { EnvService } from 'src/app/core/env.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[hideInUniversal]'
})
export class HideInUniversalDirective implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private env: EnvService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngAfterViewInit() {
    this.env.isUniversal$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((isUniversal) => {
        if (isUniversal) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      })

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
