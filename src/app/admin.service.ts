import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private storageKey = 'doctors';

  constructor() {
    if (!this.getDoctors()) {
      this.setDoctors([
        { id: 1, name: 'Dr. Smith', specialization: 'Cardiologist' },
        { id: 2, name: 'Dr. Johnson', specialization: 'Dermatologist' }
      ]);
    }
  }

  getDoctors(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  setDoctors(doctors: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(doctors));
  }

  addDoctor(doctor: any): void {
    const doctors = this.getDoctors();
    doctors.push(doctor);
    this.setDoctors(doctors);
  }

  updateDoctor(id: number, updatedDoctor: any): void {
    let doctors = this.getDoctors();
    const index = doctors.findIndex(d => d.id === id);
    if (index !== -1) {
      doctors[index] = { ...doctors[index], ...updatedDoctor };
      this.setDoctors(doctors);
    }
  }

  deleteDoctor(id: number): void {
    let doctors = this.getDoctors();
    doctors = doctors.filter(d => d.id !== id);
    this.setDoctors(doctors);
  }
}
