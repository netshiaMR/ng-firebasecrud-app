import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  formData : Project;
  constructor(private firestore:AngularFirestore) { }
 
  getAllDepartment(){
    return this.firestore.collection('projects').snapshotChanges();
  }
}
