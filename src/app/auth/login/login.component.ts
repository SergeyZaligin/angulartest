import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from "../../shared/services/users.service";
import { User } from "../../shared/models/user.model";

@Component({
  selector: "wfm-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
/**
 ** OnInit - Жизненный цикл компонента
 **/
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
    .subscribe((user: User)=>{
      if (user) {
        if (user.password === formData.password) {

        } else {
          console.error('Пароль не верный.');
        }
      } else {
        console.error('Такого пользователя не существует.');
      }
    });

  }
}
