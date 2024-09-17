import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userService } from '../../service/userService.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.scss'
})
export class RequestFormComponent {
  loading: boolean = false;
  ownerForm: FormGroup;
  defaultForm: any = '';
  selectedCategories = [];
  constructor (
    private serive: userService,
    private fb: FormBuilder
  ) {
    this.ownerForm = this.fb.group({
      works: [],
      otherneeds: [],
      description: [],
      name: [],
      email: [],
      phone_h: [],
      _w: [],
      _c: [],
      insuranceTypes: [],
      duringwork: [],
      pictureOfProperty: [],
      propertyStatus: [],
      address: [],
      city: [],
      state: [],
      zipcode: [],
      propertyType: [],
      occupant: [],
      otherowner: [],
      phone_h2: [],
      _w2: [],
      _c2: [],
      printname: [],
      signature: [],
      date: [],
      workcomplete: [],
      datecompleted: []
    })
  }
  // openForm () {
  //   this.form = true;
  // }
  ngOnInit(): void {
    this.serive.getDefaultData().subscribe((res: any) => {
      this.defaultForm = res.data;
      this.loading = false;
    })
  }
  submitForm() {
    console.log('dssfaf', this.ownerForm.value);
  }
}
