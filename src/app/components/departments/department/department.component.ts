import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  constructor(private service: ServicesService,
              private firestore: AngularFirestore) { 
              }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id:null,
      deptName: '',
      deptNumber: '',
      projectName:'',
      projectCode: ''
      
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('department').add(data);
    else
      this.firestore.doc('department/' + form.value.id).update(data);
    this.resetForm(form);
  } 
}
