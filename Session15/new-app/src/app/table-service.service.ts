import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  private data: Array<{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthday: string;
    salary: number;
    phone: string;
  }>;
  value: string;

  constructor(private serviceService: ServiceService) {}

  getData() {
    this.data = this.serviceService.getAllData();
    return this.data;
  }

  sortByName(value: any) {
    if (value === 'lastName') {
      return this.data.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
    }

    if (value === 'Id') {
      return this.data.sort((a, b) => {
        return a.id - b.id;
      });
    }

  }
}
