import { Component } from '@angular/core';
import { DoctorService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  doctors: any[] = [];
  newDoctor = { id: 0, name: '', specialization: '' };
  isEditing = false;
  displayedColumns: string[] = ['id', 'name', 'specialization', 'actions'];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctors = this.doctorService.getDoctors();
  }

  addDoctor() {
    if (this.newDoctor.name.trim() && this.newDoctor.specialization.trim()) {
      const maxId = this.doctors.length > 0 ? Math.max(...this.doctors.map(d => d.id)) : 0;
      this.newDoctor.id = maxId + 1;

      this.doctorService.addDoctor(this.newDoctor);
      this.loadDoctors();
      this.newDoctor = { id: 0, name: '', specialization: '' };
    } else {
      alert('Please fill in both fields.');
    }
  }

  editDoctor(doctor: any) {
    this.newDoctor = { ...doctor };
    this.isEditing = true;
  }

  updateDoctor() {
    if (this.newDoctor.name.trim() && this.newDoctor.specialization.trim()) {
      this.doctorService.updateDoctor(this.newDoctor.id, this.newDoctor);
      this.loadDoctors();
      this.newDoctor = { id: 0, name: '', specialization: '' };
      this.isEditing = false;
    } else {
      alert('Please fill in both fields.');
    }
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id);
    this.loadDoctors();
  }

  cancelEdit() {
    this.newDoctor = { id: 0, name: '', specialization: '' };
    this.isEditing = false;
  }
}
