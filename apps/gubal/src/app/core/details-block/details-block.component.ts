import { Component, Input } from '@angular/core';

@Component({
  selector: 'gubal-details-block',
  templateUrl: './details-block.component.html',
  styleUrls: ['./details-block.component.scss']
})
export class DetailsBlockComponent {

  @Input()
  title: string;
}
