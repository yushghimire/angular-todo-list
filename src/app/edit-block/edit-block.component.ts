import { Component, Input,OnChanges } from '@angular/core';

import Todo from '../todo';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.css']
})
export class EditBlockComponent implements OnChanges {

  ngOnChanges() {
    console.log('on Change called ');
  }

}
