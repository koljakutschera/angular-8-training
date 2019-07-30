import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[bmDelay]"
})
export class DelayDirective implements OnInit {
  @Input() bmDelay;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, this.bmDelay);
  }
}
