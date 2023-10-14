import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { StaffsService } from 'src/app/services/staffs.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss'],
})
export class StaffsComponent implements OnInit {
  @ViewChild('fileImportInput') fileImportInput: any;
  public staffs: Array<any> = [];
  public isTemplateAddStaff = false;
  constructor(
    private staffsService: StaffsService,
    private excelService: ExcelService
  ) {}

  ngOnInit() {
    this.getStaffs();
  }

  getStaffs() {
    this.staffsService.getAllStaffs().subscribe(
      (response: any) => {
        if (response) {
          if (response.data) {
            this.staffs = response.data;
          }
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  generateFamale(number: any) {
    if (number == '0' || number == 0) return 'male';
    else return 'female';
  }

  callUploadFile() {
    document.getElementById('input_file_xlsx')?.click();
  }

  fileChangeListener(event: any): void {
    const file = event.target.files[0];
    this.excelService.readExcel(file).then((data) => {
      if (data) {
        this.staffsService
          .addMultiple({ data: data })
          .subscribe((response: any) => {
            console.log('this.staffsService.addMultiple', response);
            if (response) {
              this.getStaffs();
            }
          });
      }
    });
  }
  /** Hàm thực hiện gọi giao diện thêm nhân viên
   *
   */
  callTemplateAddStaff() {
    this.openTemplateAddStaff();
  }

  openTemplateAddStaff() {
    this.isTemplateAddStaff = true;
  }

  closeTemplateAddStaff() {
    this.isTemplateAddStaff = false;
  }

  outputCancelStaff(event?: any) {
    this.closeTemplateAddStaff();
  }

  outputAddStaff(event: any) {
    this.closeTemplateAddStaff();
  }
}
