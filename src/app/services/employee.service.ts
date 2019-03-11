import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) {
    const setting: firebase.firestore.Settings = { timestampsInSnapshots: true };
    firestore.firestore.app.firestore().settings(setting);
  }

  getAllEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
