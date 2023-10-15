import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  NonNullableFormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent implements OnInit {
  @Output() outputAddStaff = new EventEmitter();
  @Output() outputCancelStaff = new EventEmitter();

  public staffForm: FormGroup<any>;
  constructor(private fb: NonNullableFormBuilder) {
    this.staffForm = this.fb.group({
      address: ['', [Validators.email, Validators.required]],
      counter: [''],
      countersalary: [''],
      usercode: [''],
      hocode: [''],
      cardnumber: [''],
      firstname: [''],
      lastname: [''],
      name2: [''],
      female: [''],
      imagedata: [''],
      thumb: [''],
      datebirth: [new Date()],
      placeborn: [''],
      domicile: [''],
      dateapply: [new Date()],
      trydate: [new Date()],
      departmentsys: [''],
      department1: [''],
      department2: [''],
      department3: [''],
      department4: [''],
      department5: [''],
      department6: [''],
      department7: [''],
      department8: [''],
      department9: [''],
      department10: [''],
      regencycode: [''],
      jobtitlecode: [''],
      email: [''],
      stafftype: [''],
      skillwork: [''],
      veterans: [''],
      numberinsurance: [''],
      dateregisterinsurance: [new Date()],
      provincecode: [''],
      viillage: [''],
      wards: [''],
      address2: [''],
      provincecode2: [''],
      viillage2: [''],
      wards2: [''],
      citizenshipcode: [''],
      ethniccode: [''],
      religioncode: [''],
      nationalcode: [''],
      numberbank: [''],
      bankname: [''],
      taxcode: [''],
      isdoctor: [false],
      educationallevel: [''],
      healthcode: [''],
      height: [0],
      weight: [0],
      bloodtype: [''],
      phonenumber: [''],
      cellphone: [''],
      idcode: [''],
      daterange: [new Date()],
      placeidcode: [''],
      registerhospital: [''],
      numbermedical: [''],
      placemedical: [''],
      datemedical: [new Date()],
      isforeigner: [false],
      istablets: [false],
      isunionists: [false],
      isfederation: [false],
      isleaders: [false],
      isparttime: [false],
      isado: [false],
      iscoo: [false],
      iscfo: [false],
      urlsignature: [''],
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  handleCancel() {
    this.outputCancelStaff.emit(true);
  }

  handleAdd() {
    this.outputAddStaff.emit(true);
  }
}
