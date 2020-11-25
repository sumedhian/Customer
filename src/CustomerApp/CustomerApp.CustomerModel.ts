import {
    NgForm,
    FormGroup,
        FormControl,
            Validators,
    FormBuilder

} from "@angular/forms"
export class Customer{
    name:string = "";
    age:number = 0; // n validation
    amount:number = 0; // no validation
    email:string = "";
    formgroup:FormGroup = null;
    constructor(){
        var _builder = new FormBuilder();
        this.formgroup = _builder.group({}); // create
        // Fg - Fc - validation
        // name is required
        this.formgroup.addControl("CustomerNameControl", 
        new FormControl('',Validators.required));
        // email is required
        // shiv@gmail.com
        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(
            Validators.pattern("^[a-z]{1,10}@[a-z]{1,10}.[a-z]{1,10}$"))

            this.formgroup.addControl("EmailControl", 
            new FormControl('',Validators.compose(validationcollection)));

            
    }
}