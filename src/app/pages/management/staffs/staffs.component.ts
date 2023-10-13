import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
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
  csvRecords: any;
  header: boolean = false;
  constructor(
    private staffsService: StaffsService,
    private ngxCsvParser: NgxCsvParser
  ) {}

  ngOnInit() {
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


  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    this.header =
      (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser
      .parse(files[0], {
        header: this.header,
        delimiter: ',',
        encoding: 'utf8',
      })
      .pipe()
      .subscribe(
        (result: any) => {
          this.csvRecords = result;
          this.staffsService.addMultiple({data: result.toString()}).subscribe((response: any)=>{
            console.log('this.staffsService.addMultiple', response);

          })
        },
        (error: NgxCSVParserError) => {
          console.log('Error', error);
        }
      );
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
