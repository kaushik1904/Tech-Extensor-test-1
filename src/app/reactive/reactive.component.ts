import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  public userForm: any;
  public userData: any = [];

  ngOnInit() {
    this.userData = JSON.parse(
      localStorage.getItem(this.route.snapshot.params['id']) || '{}'
    );
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      textArea: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      hobby: this.fb.group({
        cricket: [''],
        dancing: [''],
        reading: [''],
        blogging: [''],
        journaling: [''],
      }),
      company: ['', [Validators.required]],
    });
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

  get firstName() {
    return this.userForm.controls['firstName'];
  }
  get middleName() {
    return this.userForm.controls['middleName'];
  }
  get lastName() {
    return this.userForm.controls['lastName'];
  }
  get age() {
    return this.userForm.controls['age'];
  }

  onSubmit() {
    const user = this.userForm.value;
    const tmp = [user];
    localStorage.setItem(
      `${this.route.snapshot.params['id']}`,
      JSON.stringify(tmp)
    );
  }

  goBack() {
    this.router.navigate(['home']);
  }

  // clearAll() {
  //   this.userForm.reset({});
  // }

  fetchData() {
    this.userForm.setValue({
      firstName: [this.userData[0]['firstName']],
      middleName: [this.userData[0]['middleName']],
      lastName: [this.userData[0]['lastName']],
      textArea: [this.userData[0]['textArea']],
      age: [this.userData[0]['age']],
      gender: this.userData[0]['gender'],
      hobby: this.userData[0]['hobby'],
      company: [this.userData[0]['company']],
    });
  }
}
