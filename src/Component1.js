import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import "./Component1.css"

export default class Component1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grocery:"",
            veggies:"",
            travelling:"",
            miscellaneous:"",
            income:"",
            groceryamt:"",
            veggiesamt:"",
            travellingamt:"",
            miscellaneousamt:"",
            incomeamt:"",
            arr1grocery:[],
            arr1veggies:[],
            arr1travelling:[],
            arr1miscellaneous:[],
            arr1income:[],
            allexpenses:0,
            allincome:0,
            allresult:"",
            balance:"",
            edit:[],
            allgr:"",
            allveg:"",
            alltr:"",
            allmis:"",
            allin:"",color:""

        }
        
    }
    changegrocery=(event)=>{
      
        this.setState({grocery:event.target.value})

    }
    changeveggies=(event)=>{
        this.setState({veggies:event.target.value})
        
    }
    changetravelling=(event)=>{
        this.setState({travelling:event.target.value})
        
    }
    changemiscellaneous=(event)=>{
        this.setState({miscellaneous:event.target.value})
        
    }
    changeincome=(event)=>{
        this.setState({income:event.target.value})
        
    }
    changegroceryamount=(event)=>{
        
        this.setState({groceryamt:event.target.value})

    }
    changeveggiesamount=(event)=>{
        this.setState({veggiesamt:event.target.value})
        
    }
    changetravellingamount=(event)=>{
        this.setState({travellingamt:event.target.value})
        
    }
    changemiscellaneousamount=(event)=>{
        this.setState({miscellaneousamt:event.target.value})
        
    }
    changeincomeamount=(event)=>{
        this.setState({incomeamt:event.target.value})
        
    }
    groceryexpense=(event)=>{
           var myobj = {item:this.state.grocery,amt:this.state.groceryamt}
           if(this.state.grocery!=="" && this.state.groceryamt!==""){
               this.setState({arr1grocery:[...this.state.arr1grocery,myobj]},()=>{this.total(event)})
               this.setState({grocery:"",groceryamt:""})   
           }      
          
    }
    veggiesexpense=(event)=>{
        var myobj = {item:this.state.veggies,amt:this.state.veggiesamt}
        if(this.state.veggies!=="" && this.state.veggiesamt!==""){
            this.setState({arr1veggies:[...this.state.arr1veggies,myobj]},()=>{this.total(event)})
            this.setState({veggies:"",veggiesamt:""})
        }
    
       
       
    }
 travellingexpense=(event)=>{
    var myobj = {item:this.state.travelling,amt:this.state.travellingamt}
    if(this.state.travelling!=="" && this.state.travellingamt!==""){
        this.setState({arr1travelling:[...this.state.arr1travelling,myobj]},()=>{this.total(event)})
        this.setState({travelling:"",travellingamt:""})
    }
   
    
   }
 miscellaneousexpense=(event)=>{
    var myobj = {item:this.state.miscellaneous,amt:this.state.miscellaneousamt}
    if(this.state.miscellaneous!=="" && this.state.miscellaneousamt!==""){
        this.setState({arr1miscellaneous:[...this.state.arr1miscellaneous,myobj]},()=>{this.total(event)})
        this.setState({miscellaneous:"",miscellaneousamt:""})
    }
    
   
   }
   addincome=(event)=>{
    var myobj = {item:this.state.income,amt:this.state.incomeamt}
    if(this.state.income!=="" && this.state.incomeamt!==""){
        this.setState({arr1income:[...this.state.arr1income,myobj]},()=>{this.total(event)})
        this.setState({income:"",incomeamt:""})
    }
   }
   deleterow=(event)=>{
      if(event.target.id==1){
         this.state.arr1grocery = this.state.arr1grocery.filter((e,index)=>{
                  return (index!=event.target.value)
         })
      }
      if(event.target.id==2){
        this.state.arr1veggies = this.state.arr1veggies.filter((e,index)=>{
            return (index!=event.target.value)
        })
     }
     if(event.target.id==3){
        this.state.arr1travelling = this.state.arr1travelling.filter((e,index)=>{
            return (index!=event.target.value)
   })
       
     }
     if(event.target.id==4){
        this.state.arr1miscellaneous = this.state.arr1miscellaneous.filter((e,index)=>{
            return (index!=event.target.value)
      
     })
   }
     if(event.target.id==5){
       this.state.arr1income = this.state.arr1income.filter((e,index)=>{
        return (index!=event.target.value)
  
    })
}
} 
   editrow=(event)=>{
       var obj =  {checkarray:event.target.id,checkindex:event.target.value}
            if(event.target.id==1){
               this.setState({grocery:this.state.arr1grocery[event.target.value].item})
               this.setState({groceryamt:this.state.arr1grocery[event.target.value].amt})
               document.getElementById("update1").setAttribute("type","button")
               document.getElementById("add1").setAttribute("type","hidden")
              
            }
            if(event.target.id==2){
                this.setState({veggies:this.state.arr1veggies[event.target.value].item})
                this.setState({veggiesamt:this.state.arr1veggies[event.target.value].amt})
                document.getElementById("update2").setAttribute("type","button")
                document.getElementById("add2").setAttribute("type","hidden")
             }
             if(event.target.id==3){
                this.setState({travelling:this.state.arr1travelling[event.target.value].item})
                this.setState({travellingamt:this.state.arr1travelling[event.target.value].amt})
                document.getElementById("update3").setAttribute("type","button")
                document.getElementById("add3").setAttribute("type","hidden") 
             }
             if(event.target.id==4){
                this.setState({miscellaneous:this.state.arr1miscellaneous[event.target.value].item})
                this.setState({miscellaneousamt:this.state.arr1miscellaneous[event.target.value].amt})
                document.getElementById("update4").setAttribute("type","button")
                document.getElementById("add4").setAttribute("type","hidden")
             }
             if(event.target.id==5){
                this.setState({income:this.state.arr1income[event.target.value].item})
                this.setState({incomeamt:this.state.arr1income[event.target.value].amt})
                document.getElementById("update5").setAttribute("type","button")
                document.getElementById("add5").setAttribute("type","hidden")
             }
           
             this.setState({edit:[...this.state.edit,obj]})
      
   }
   update=(event)=>{
      
      
     

    
       if(this.state.edit[0].checkarray==1){
        var obj1 ={item:this.state.grocery,amt:this.state.groceryamt} 
        var tempg=[...this.state.arr1grocery]
           var ind =this.state.edit[0].checkindex
            tempg.splice(ind , 1, obj1)
          
            this.setState({arr1grocery:tempg},()=>{this.total(event)})
            document.getElementById("update1").setAttribute("type","hidden")
            document.getElementById("add1").setAttribute("type","button")
       }
       if(this.state.edit[0].checkarray==2){
        var obj2 ={item:this.state.veggies,amt:this.state.veggiesamt} 
        var tempv=[...this.state.arr1veggies]
        var indv =this.state.edit[0].checkindex
         tempv.splice(indv , 1, obj2)
     
         this.setState({arr1veggies:tempv},()=>{this.total(event)})
         document.getElementById("update2").setAttribute("type","hidden")
         document.getElementById("add2").setAttribute("type","button")

           
       }
       if(this.state.edit[0].checkarray==3){
        var obj3 ={item:this.state.travelling,amt:this.state.travellingamt} 
        var tempt=[...this.state.arr1travelling]
        var indt =this.state.edit[0].checkindex
         tempt.splice(indt , 1, obj3)
         this.setState({arr1travelling:tempt},()=>{this.total(event)})
         document.getElementById("update3").setAttribute("type","hidden")
         document.getElementById("add3").setAttribute("type","button")
           
       }
       if(this.state.edit[0].checkarray==4){
        var obj4 ={item:this.state.miscellaneous,amt:this.state.miscellaneousamt} 
        var tempm=[...this.state.arr1miscellaneous]
        var indm =this.state.edit[0].checkindex
         tempm.splice(indm , 1, obj4)
  
         this.setState({arr1miscellaneous:tempm},()=>{this.total(event)})
         document.getElementById("update4").setAttribute("type","hidden")
         document.getElementById("add4").setAttribute("type","button")
           
       }
       if(this.state.edit[0].checkarray==5){
        var obj5 ={item:this.state.income,amt:this.state.incomeamt} 
        var tempi=[...this.state.arr1income]
        var indi =this.state.edit[0].checkindex
         tempi.splice(indi , 1, obj5)
      
         this.setState({arr1income:tempi},()=>{this.total(event)})
         document.getElementById("update5").setAttribute("type","hidden")
         document.getElementById("add5").setAttribute("type","button")
           
       }
       this.setState({edit:[]})
    

   }
   total=(event)=>{
       event.preventDefault()
       var z1=0;
       var z2=0;
       var z3=0;
       var z4=0;
       var z5 =0;
       var expensehere=0;
       var incomehere=0;
     console.log(this.state.arr1veggies)
         this.state.arr1grocery.map((e)=>{
            return z1 = z1 + parseInt(e.amt)
        })           
      

     
        this.state.arr1veggies.map((e)=>{
          return  z2 = z2 + parseInt(e.amt)
        })
      
     
        this.state.arr1travelling.map((e)=>{
            z3 = z3 + parseInt(e.amt)
        })
      
     
        this.state.arr1miscellaneous.map((e)=>{
            z4 = z4 + parseInt(e.amt)
        })
      
     
        this.state.arr1income.map((e)=>{
            z5 = z5 + parseInt(e.amt)
        })
      
        incomehere=z5;
        expensehere=z1+z2+z3+z4;
        let result = incomehere - expensehere
        console.log(result)
      
        this.setState({allexpenses:expensehere,allincome:incomehere,allgr:z1,allveg:z2,alltr:z3,allmis:z4,allin:z5})
        if(result>0){
            this.setState({allresult:result,balance:"Overall Balance:",color:"green"})
        }
        if(result<0){
            this.setState({allresult:result,balance:"Overall Balance:",color:"red"})
        }
        if(result===0){
            this.setState({allresult:0,balance:"Overall Balance:",color:"red"})
        }
        
       
       
   }
  render() {
    return (
      <div id="component1">
          <form onSubmit={this.total}>
          <div id="expense">
              <h3 id="h3expense">All expenses</h3>
              <h3 id="overall" style={{color:this.state.color}}>Overall Balance:{this.state.allresult}</h3>
              {/* <h3 style={{float:"right",marginRight:"-10vw",color:"blue"}}>{this.state.allresult}</h3> */}
              
                  <p className="p1"><span>Grocery:</span><input type="text" placeholder='item' value={this.state.grocery} onChange={this.changegrocery}/><input type="number" placeholder='amount' value={this.state.groceryamt} onChange={this.changegroceryamount}/><input type="button" value="Add"  id="add1" onClick={this.groceryexpense}/><input type="hidden" value="Update" id="update1" onClick={this.update}/><input type="text"value={"Groceries:"+this.state.allgr} readOnly/></p>
                   
              {this.state.arr1grocery.map((data,index)=>{
                       return <li><input type="text" value={data.item} readOnly/><input type="number" value={data.amt} readOnly /><button className="editbtn" id="1" value={index} onClick={this.editrow}><i class="fa-solid fa-pen-to-square"></i></button><button className="deletebtn" onClick={this.deleterow} id="1" value={index}><i class="fa-solid fa-trash"></i></button></li>
                 })}
                  <p><span>Veggies:</span><input type="text" placeholder='item' value={this.state.veggies} onChange={this.changeveggies}/><input type="number" placeholder='amount' value={this.state.veggiesamt} onChange={this.changeveggiesamount} /><input type="button" id="add2" value="Add" onClick={this.veggiesexpense}/><input type="hidden" value="Update" id="update2" onClick={this.update}/><input type="text"value={"Veggies:"+this.state.allveg} readOnly/></p>
                  {this.state.arr1veggies.map((data,index)=>{
                       return <li><input type="text" value={data.item} readOnly/><input type="number" value={data.amt} readOnly /><button className="editbtn" id="2" value={index} onClick={this.editrow}><i class="fa-solid fa-pen-to-square"></i></button><button className="deletebtn" onClick={this.deleterow} id="2" value={index}><i class="fa-solid fa-trash"></i></button></li>
                 })}
                  <p><span>Travelling: </span><input type="text" placeholder='item' value={this.state.travelling} onChange={this.changetravelling}/><input type="number" placeholder='amount' value={this.state.travellingamt} onChange={this.changetravellingamount}/><input type="button" id="add3" value="Add" onClick={this.travellingexpense}/><input type="hidden" value="Update" id="update3" onClick={this.update}/><input type="text"value={"Travelling:"+this.state.alltr} readOnly/></p>
                  {this.state.arr1travelling.map((data,index)=>{
                       return <li><input type="text" value={data.item} readOnly/><input type="number" value={data.amt} readOnly /><button className="editbtn" id="3" value={index} onClick={this.editrow}><i class="fa-solid fa-pen-to-square"></i></button><button className="deletebtn" onClick={this.deleterow} id="3" value={index}><i class="fa-solid fa-trash"></i></button></li>
                 })}
                  <p><span>Miscellaneous:</span><input type="text" placeholder='item' value={this.state.miscellaneous} onChange={this.changemiscellaneous}/><input type="number" placeholder='amount' value={this.state.miscellaneousamt} onChange={this.changemiscellaneousamount}/><input type="button" id="add4" value="Add" onClick={this.miscellaneousexpense}/><input type="hidden" value="Update" id="update4" onClick={this.update}/><input type="text"value={"Miscell:"+this.state.allmis} readOnly/></p>
                  {this.state.arr1miscellaneous.map((data,index)=>{
                       return <li><input type="text" value={data.item} readOnly/><input type="number" value={data.amt} readOnly /><button className="editbtn" id="4" value={index} onClick={this.editrow}><i class="fa-solid fa-pen-to-square"></i></button><button className="deletebtn" onClick={this.deleterow} id="4" value={index}><i class="fa-solid fa-trash"></i></button></li>
                 })}
              
          </div>
          <div id="income">
              <h3 id="h3income">All income</h3>
             
                  <p><span>Income: </span><input type="text" placeholder='Source' value={this.state.income} onChange={this.changeincome}/><input type="number" placeholder='Amount' value={this.state.incomeamt} onChange={this.changeincomeamount}/><input type="button" id="add5" value="Add" onClick={this.addincome}/><input type="hidden" value="Update" id="update5" onClick={this.update}/><input type="text"value={"Income:"+this.state.allin} readOnly/></p>
                  {this.state.arr1income.map((data,index)=>{
                       return <li><input type="text" value={data.item} readOnly/><input type="number" value={data.amt} readOnly /><button className="editbtn" id="5" value={index} onClick={this.editrow}><i class="fa-solid fa-pen-to-square"></i></button><button className="deletebtn" onClick={this.deleterow} id="5" value={index}><i class="fa-solid fa-trash"></i></button></li>
                 })}
          </div>
          <input type="submit" value="Check Your Balance"/>
          </form>
         
      </div>
    )
  }
}
