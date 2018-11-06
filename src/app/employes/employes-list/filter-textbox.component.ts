import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "filter-textbox",
  template: `
    Filter : <input type="text" [(ngModel)]="wordFilter"/>
  `
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;

  @Input()
  get wordFilter() {
    return this._filter;
  }

  set wordFilter(val: string) {
    this._filter = val;
    this.changed.emit(this.wordFilter);
  }

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
