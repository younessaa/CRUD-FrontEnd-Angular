import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path : 'students', component : StudentDashboardComponent},
  {path : 'create-student', component : CreateStudentComponent},
  {path : 'update-student/:id', component : UpdateStudentComponent},
  {path : '', redirectTo : 'students', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
