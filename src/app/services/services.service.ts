import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
    formData: Department;
  constructor(private firestore: AngularFirestore) {

   }
   getAllDepartment(){
     return this.firestore.collection('department').snapshotChanges();
   }
}
