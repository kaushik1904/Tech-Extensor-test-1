import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  userModel = new User(
    '',
    '',
    '',
    '',
    '',
    '',
    { cricket: '', dancing: '' },
    ''
  );
}
