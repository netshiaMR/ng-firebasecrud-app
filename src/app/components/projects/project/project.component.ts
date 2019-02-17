import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.projectService.formData = {
      id: null,
      projectName: '',
      projectDescription: '',
      departmentName: '',
      startDate : '',
      endDate : ''
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('projects').add(data);
    else
      this.firestore.doc('projects/' + form.value.id).update(data);
    this.resetForm(form);
  }
}
