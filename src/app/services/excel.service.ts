import { Injectable } from '@angular/core';
import * as xlsx from 'xlsx';
@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}
  readExcel(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);

        const workbook = xlsx.read(data, { type: 'array' });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const jsonData = xlsx.utils.sheet_to_json(worksheet);

        // Xử lý dữ liệu
        // Gán null = ''

        resolve(jsonData);
      };

      reader.readAsArrayBuffer(file);
    });
  }
}
