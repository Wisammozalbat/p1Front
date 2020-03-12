import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { InputService } from '../../services/input/input.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent implements OnInit {

  @Output() refreshInputs: EventEmitter<any> = new EventEmitter();
  addInput : FormGroup;
  label: AbstractControl;
  type: AbstractControl;

  constructor(public formBuilder: FormBuilder, private input: InputService) {
    this.addInput = this.formBuilder.group({
        label: ['', Validators.required],
        type: ['text', Validators.required]
    });

    this.label = this.addInput.controls['label'];
    this.type = this.addInput.controls['type'];
  }

  ngOnInit() {}

  createInput(){
    if(this.addInput.valid){
      // let obj = {label_input: this.label.value, type_input: this.type.value}
      // this.refreshInputs.emit({...obj});
      this.input.createInput(this.label.value, this.type.value).subscribe((results) =>{
        alert(results)
        this.refreshInputs.emit();
      })
    }
  }

}
