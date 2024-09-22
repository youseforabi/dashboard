import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private storageKey = 'doctors';

  constructor() { 
    // Initialize doctors if not already present in local storage
    if (!this.getDoctors()) {
      this.setDoctors([
        {id : 1 , name : 'Dr. Smith' , specialization : 'Cardiologist'} ,
        {id : 2 , name : 'Dr. John' , specialization : 'Dermatologist'}
      ]);
    }
  }

   getDoctors(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

   setDoctors(doctors: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(doctors));
  }

  
}
