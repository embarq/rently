import { Directive, Input, HostBinding, NgZone, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[bgImg]'
})
/** Sets provided resource url as background-image style, adds rty-bg-img class */
export class BackgroundImageDirective {
  @Input('bgImg') bgImgUrl: string;

  @HostBinding('style.background-image')
  hostStyle: string;

  constructor(
    private elemRef: ElementRef,
    private zone: NgZone,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      if (this.bgImgUrl != null) {
        this.renderer.setElementClass(this.elemRef.nativeElement, 'rty-bg-img', true);
        this.renderer.setElementStyle(this.elemRef.nativeElement, 'background-image', `url(${ this.bgImgUrl })`);
      } else {
        this.renderer.setElementClass(this.elemRef.nativeElement, 'rty-missing-bg-img', true);
        this.renderer.setElementStyle(this.elemRef.nativeElement, 'background-image', `url(/assets/missing.svg)`);
      }
    });
  }

}
