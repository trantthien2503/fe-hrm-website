import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent implements OnInit {
  @Output() outputAddStaff = new EventEmitter();
  @Output() outputCancelStaff = new EventEmitter();

  validateForm: FormGroup<{
    email: FormControl<string>;
  }>;
  constructor(
    private fb: NonNullableFormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {

  }

  handleCancel(){
    this.outputCancelStaff.emit(true)
  }

  handleAdd(){
    this.outputAddStaff.emit(true)
  }
}
