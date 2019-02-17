import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { ServicesService } from 'src/app/services/services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  list: Department[];
  constructor(private servicesService:ServicesService,
     private firestore: AngularFirestore,
    private toastr:ToastrService) { 

    }

  ngOnInit() {
    this.servicesService.getAllDepartment().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Department;
        })
      });
  }
  
  onEdit(dept: Department) {
    this.servicesService.formData = Object.assign({}, dept);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('department/' + id).delete();
      this.toastr.warning('Deleted successfully','DEP. Register');
    }
  }

}
