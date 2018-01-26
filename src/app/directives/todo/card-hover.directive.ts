import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: 'div[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-danger') private ishovering: boolean;
  @Input('ccCardHover') config: Object = {
    querySelector: ''
  };

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  @HostListener('mouseover') onMouseOver() {
    this.ishovering = true;
    const part = this.el.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
    const part = this.el.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementStyle(part, 'display', 'none');
  }
}

