import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  list: Project[];
  constructor(private projectService : ProjectService,  private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.projectService.getAllDepartment().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Project;
      })
    });
  }
  
  onEdit(pro: Project) {
    this.projectService.formData = Object.assign({}, pro);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('project/' + id).delete();
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }

}
