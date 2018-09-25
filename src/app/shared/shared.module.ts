import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule, FormsModule], // import modules in modules
  exports: [ReactiveFormsModule, FormsModule] // export modules in modules
})
export class SharedModule {}
