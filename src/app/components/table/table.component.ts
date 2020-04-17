import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table =[
    { Emp_id: 1, Emp_Name: "Louis Pasteur", Emp_salary: 20000, Emp_location: "USA" },
    { Emp_id: 2, Emp_Name: "Thomas Alva Edison", Emp_salary: 20000, Emp_location: "Germany" },
    { Emp_id: 3, Emp_Name: "Galileo Galilei", Emp_salary: 20000,Emp_location: "USA" },
    { Emp_id: 4, Emp_Name: "Abdul kalam", Emp_salary: 20000, Emp_location: "India" },
    { Emp_id: 5, Emp_Name: "Aristotle", Emp_salary: 20000, Emp_location: "USA"},
    { Emp_id: 6, Emp_Name: "Marie Curie", Emp_salary: 20000, Emp_location: "Brazil" },
    { Emp_id: 7, Emp_Name: " Nikola Tesla", Emp_salary: 20000, Emp_location: "USA"},
    { Emp_id: 8, Emp_Name: "Hiroshi Abe", Emp_salary: 20000,  Emp_location: "Germany" },
    { Emp_id: 9, Emp_Name: "Somnath Bharadwaj", Emp_salary: 20000, Emp_location: "India" },
    { Emp_id: 10, Emp_Name: "Luís Cruls", Emp_salary: 20000, Emp_location: "Brazil" },
    { Emp_id: 11, Emp_Name: "Subrahmanyan Chandrasekhar", Emp_salary: 20000, Emp_location: "India" },
    { Emp_id: 12, Emp_Name: "Saul Adelman", Emp_salary: 20000, Emp_location: "Germany" },
    { Emp_id: 13, Emp_Name: "Agrippa", Emp_salary: 20000, Emp_location: "India" },
    { Emp_id: 14, Emp_Name: "Albumasar", Emp_salary: 20000, Emp_location: "India" },
    { Emp_id: 15, Emp_Name: "Harold Alden", Emp_salary: 20000,  Emp_location: "Germany" },
    { Emp_id: 16, Emp_Name: "Wilhelm Anderson", Emp_salary: 20000, Emp_location: "USA" },
    { Emp_id: 17, Emp_Name: "Marie Henri Andoyer", Emp_salary: 20000, Emp_location: "Brazil" },
    { Emp_id: 18, Emp_Name: "Anders Jonas Ångström", Emp_salary: 20000, Emp_location: "Brazil" },
    { Emp_id: 19, Emp_Name: "Sylvain Arend", Emp_salary: 20000, Emp_location: "Germany" },
    { Emp_id: 20, Emp_Name: "Brahmagupta", Emp_salary: 20000, Emp_location: "India" }
]
  displayedColumns: string[] = ['Emp_id', 'Emp_Name', 'Emp_salary', 'Emp_location'];
  //dataSource = this.table;
  arr :any = [];
  selected = "5";
  location= [
    {value: "USA",isCheck: false, viewValue: "USA"},
    {value: "India",isCheck: false, viewValue: "India"},
    {value: "Germany",isCheck: false, viewValue:"Germany"},
    {value: "Brazil",isCheck: false, viewValue:"Brazil"}
  ];
  start=0;
  end=5;
  len = this.table.length;
  count ;
  //cou =0;
  page: any = [];
  //co=0;
  int1: number;
  newarr: any = [];
  delArr: { Emp_id: number; Emp_Name: string; Emp_salary: number; Emp_location: string; }[];
  tab: { Emp_id: number; Emp_Name: string; Emp_salary: number; Emp_location: string; }[];
  

  constructor() { }

  ngOnInit() { 
    this.arr = this.table;
    this.table = this.arr.slice(this.start,this.end);
    console.log(this.table);
   
    console.log(this.selected, this.len);
   for(let i=0; i<this.len/5; i++)
   this.page[i] = i+1; 
   console.log(this.page);

   
    // for(var i=1;i<=this.len;i++)
    // {
    //      if(i%5==0)
    //      {
    //        // this.co = this.cou++;
            
    //         console.log('xxxx',this.co, i);
               
    //      }
    // }
  }
  
  nextpage(){
    console.log("next");
    this.start = this.end;
    this.end = this.end + 5;
    this.table = this.arr.slice(this.start, this.end)
  }
  prevpage(){
    this.start = this.start-5;
    this.end = this.end-5;
    this.table = this.arr.slice(this.start, this.end);
   }
   pagemethod(ev){
    console.log(ev);
   
    this.int1 = +this.selected;
    console.log(this.int1)
    this.end = ev*this.int1;
    this.start = this.end-this.int1;
    this.table = this.arr.slice(this.start, this.end);

   }
  firstpage(){
    this.start = 0;
    this.end = 5;
    this.table = this.arr.slice(this.start,this.end)
  }
  // secondpage(){
  //   this.start = 5;
  //   this.end = 10;
  //   this.table = this.arr.slice(this.start,this.end)
  // }
  // thirdpage(){
  //   this.start = 10;
  //   this.end = 15;
  //   this.table = this.arr.slice(this.start,this.end)
  // }
  fourthpage(){
    this.start = 15;
    this.end = 20;
    this.table = this.arr.slice(this.start,this.end)
  }
  selectChange(ev){
    console.log(ev.value)
    this.start = 0;
    this.end = ev.value;
    console.log(this.selected)
    this.table = this.arr.slice(this.start,this.end);
    
    this.int1 = +this.selected;
    this.count=Math.round(this.len/this.int1);
    this.page = [];
    console.log(this.count);
    for(let i=0; i<this.count; i++)
   this.page[i] = i+1; 
   console.log(this.page);

  }
  locationrow(ev){
    this.table = [];
    console.log(ev.value);
    this.arr.forEach(l => {
      if(l.Emp_location === ev.value){
        this.table.push(l);
       
       console.log(l)
        return l;
      }
    
    });
    console.log(this.table)
  }

  checkValue(check){
    
    var c=check.isCheck;
    console.log(c);
   // check.isCheck = !check.isCheck;
    console.log(check.isCheck);
    if(c){
      
      this.table = [];
      this.arr.forEach(l=>{
      
        if(l.Emp_location === check.viewValue){
          this.newarr.push(l);
        
         
        }
         this.table = this.newarr;
         console.log(this.table)
  })
  console.log(this.table)
}
  else{
    console.log("else")
    //this.table = this.newarr;
    console.log(this.table)
    this.tab = this.table;
    this.table.forEach(l=>{
      
      if(l.Emp_location == check.viewValue)
    {
    //   console.log(l.Emp_location)
    //   var c = this.table.findIndex(l=> l.Emp_location === check.viewValue);
    //  console.log(c)
    //   this.table.splice(c,1);
    //   console.log(this.table)
   
    console.log(l)
    var c = this.tab.indexOf(l);
    console.log(c);
    this.delArr = this.tab.splice(c,1)
    
    }
    console.log(this.tab);
    this.table = this.tab;
    })
   // console.log(this.table);
  }
}
clear(){
  this.location.forEach(l=>{
    l.isCheck = false;

  })
  this.start = 0;
    this.end = 5;
    this.table = this.arr.slice(this.start,this.end)
}

}

