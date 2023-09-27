import { Component } from '@angular/core';
import { YourDataService } from '../kct.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authservice:YourDataService){}

  formdata={
  username:'',
  email:'',
  password:''}

  register() {
    this.authservice.regiter(this.formdata).subscribe(Res=>{

    })
  }
}
