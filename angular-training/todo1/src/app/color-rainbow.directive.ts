import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorRainbow]'
})
export class ColorRainbowDirective {

  rainbowColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;

  @HostListener('mouseenter') newColor() {
    const colorPick = Math.floor(Math.random() * this.rainbowColors.length);

    this.color = this.rainbowColors[colorPick];
  }

}
