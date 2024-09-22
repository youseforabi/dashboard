import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']  // Corrected property name to "styleUrls"
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];
  newDoctor = { id: 0, name: '', specialization: '' };

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    // Initialize doctors on component load
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctors = this.doctorService.getDoctors();
  }

 
}
