import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit() {
    if (localStorage.getItem(this.router.snapshot.params['id']) != null) {
      this.userData = JSON.parse(
        localStorage.getItem(this.router.snapshot.params['id']) || '{}'
      );

      this.userModel = new User(
        this.userData[0]['firstName'],
        this.userData[0]['middleName'],
        this.userData[0]['lastName'],
        this.userData[0]['textArea'],
        this.userData[0]['age'],
        this.userData[0]['gender'],
        this.userData[0]['hobby'],
        this.userData[0]['company']
      );
    }
  }

  public company = [
    'Tech Extensor',
    'Google',
    'Amazon',
    'Flipcart',
    'Uber',
    'Zomato',
    'IBM',
    'TCS',
  ];

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

  public id: string = '';
  public userData: any = [];
  goBack() {
    this.route.navigate(['home']);
  }

  clearAll() {
    this.userModel.firstName = '';
    this.userModel.middleName = '';
    this.userModel.lastName = '';
    this.userModel.textArea = '';
    this.userModel.age = '';
    this.userModel.gender = '';
    this.userModel.hobby.cricket = '';
    this.userModel.hobby.dancing = '';
    this.userModel.company = '';
  }

  onSubmit() {
    this.userModel.textArea =
      this.userModel.firstName +
      ' ' +
      this.userModel.middleName +
      ' ' +
      this.userModel.lastName;

    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    console.log(this.userModel);
    this.userData.push({
      id: this.id,
      firstName: this.userModel.firstName,
      middleName: this.userModel.middleName,
      lastName: this.userModel.lastName,
      textArea: this.userModel.textArea,
      age: this.userModel.age,
      gender: this.userModel.gender,
      hobby: {
        cricket: this.userModel.hobby.cricket,
        dancing: this.userModel.hobby.dancing,
      },
      company: this.userModel.company,
    });
    console.log(this.userData);
    localStorage.setItem(this.id, JSON.stringify(this.userData));
    this.route.navigate(['reactive/' + this.id]);
  }
}
