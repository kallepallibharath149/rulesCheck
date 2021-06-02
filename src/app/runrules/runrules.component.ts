import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-runrules',
  templateUrl: './runrules.component.html',
  styleUrls: ['./runrules.component.scss']
})
export class RunrulesComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public OutPutOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;
  public OutPutOptionsData: any

form:FormGroup ;

  constructor(private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private ruleServ:RulesService,
    private formbuilder: FormBuilder) { 
    this.editorOptions = new JsonEditorOptions();
    this.OutPutOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode
    this.OutPutOptions.modes = ['code', 'text', 'tree', 'view']; 
    this.OutPutOptions.mode = 'code';
    this.editorOptions.statusBar = false;
    this.editorOptions.search = false; 
    this.OutPutOptions.statusBar = false;

      this.data = {};

      const formfields = {
        inputData: {},
        outputData: [{value:'', disabled: true}]
      }
      this.form = this.formbuilder.group(formfields);
      this.form.get('outputData').disable();
  }

  ngOnInit(): void {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  //  // start foreground spinner of the master loader with 'default' taskId
  //   // Stop the foreground loading after 5s
  //   this.showLoader();
  //   setTimeout(() => {
  //     this.stopLoader();
  //  // stop foreground spinner of the master loader with 'default' taskId
  //   }, 5000);

  }

  showLoader(){
    this.ngxService.start();
  }
 
 stopLoader(){
  this.ngxService.stop(); 
 }

 clickRules(payLoadd){

   this.showLoader();
   let payLoad = this.form.get('inputData').value;
   this.ruleServ.runRules(payLoad).subscribe(resp =>{
    this.toastr.success('Rules run successful');
     this.stopLoader();
     let val = {};
     val = {...resp};
     this.form.patchValue({
      outputData: val
     })
     this.OutPutOptionsData = resp;
   }, err =>{
    this.stopLoader();
    this.toastr.error('Rules run failed!');
   })
 }

}
