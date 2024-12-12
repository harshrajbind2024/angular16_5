import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators,FormArray } from '@angular/forms';
import { formsignup73 } from './formsignup73';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fiftReactiveform';
 
  signupForm:FormGroup;
  firstName:string="";
 lastName:string="";
 Email:string="";
 password:string="";

 constructor( private frmBuilder:FormBuilder ){
     this.signupForm=frmBuilder.group({
        Fname:['',Validators.required],
        Lname:['',Validators.required,Validators.maxLength(10)],
        EmailId:['',Validators.required,Validators.email],
        userpassword:['',Validators.required],
     });
 }

//  ngOnInit(): void {
   
//  }


// // L-73
// ngOnInit() {
//   // this.signupForm.get('Fname')?.valueChanges.subscribe(
//   //   uname=>{
//   //     console.log('f name change: '+uname);
      
//   //   }
//   // )



// // value change
//   this.signupForm.valueChanges.subscribe(( uname:formsignup73)=>{
//     console.log('f name change: '+uname.Fname);
//     console.log('lname change: '+uname.Lname);
//     console.log('email change: '+uname.EmailId);
//     console.log('password change: '+uname.userpassword);
//   })



//     // status change particular
//   //   this.signupForm.get('Fname')?.statusChanges.subscribe(
//   //   status=>{
//   //     console.log('fname validation change: '+status);
      
//   //   }
//   // )

//     // status change all

//   this.signupForm.statusChanges.subscribe(
//     status=>{
//       console.log('fname validation change: '+status);
      
//     }
//   )


// }


// 74
//  ngOnInit(){
//      const arr= new FormArray([
//       new FormControl('r' ,Validators.minLength(2)),
//       new FormControl('bind')
//      ]);
//    console.log(arr.value);
//    console.log(arr.status);  

//  }

 ngOnInit(){
  const arr= new FormArray([
   new FormControl(),
   new FormControl()
  ]);
  arr.setValue(['aaaa','zzzz'])
  arr.patchValue(['ssss','gggg'])
  arr.reset(['name','lastname'])
console.log(arr.value);
console.log(arr.status);  

}





//  postData(signupForm:NgForm){
//     console.log(signupForm.controls);    
//  }

postData(signupForm:any){
  console.log(signupForm.controls);   
  
  this.firstName=this.signupForm.get('Fname')?.value;
  console.log(this.firstName);
  console.log(this.signupForm.value);
  
  
}

// resetbtn(){
//   this.signupForm.reset();
// }
   
//  //reset timme particular value me reassin kr sakate hai
resetbtn(){

  this.signupForm.reset(
    {
      Fname:'raj',
      Lname:'bind',
      EmailId:'harsh@gmail.com'
    }
  );
}


filldata(){
  this.signupForm.setValue({
    "Fname":"raj raj",
    "Lname":"bind bind",
    "EmailId":"harsh123@gmail.com",
    "userpassword":1234
  })
}


}
