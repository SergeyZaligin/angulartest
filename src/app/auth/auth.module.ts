import { NgModule } from "@angular/core";
import { CommonModules } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthComponent],
  imports: [CommonModule]
})
export class AuthModule {}
