import { bindable } from 'aurelia-framework';

export class TopHeader {
  @bindable title: string;

  attached() {
    console.log(this.title);
  }
}
