import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Lst_pg=(props)=>{
let con=[]
console.log(props.tss)
  for(let i=0;i<props.tss.length;i++)
  {
    con.push(<p>&nbsp;Title: {props.tss[i].tit} </p>)
    con.push( <p>&nbsp;Discription: {props.tss[i].des}</p>)
    con.push( <p>&nbsp;Date: {props.tss[i].date}</p>)
    con.push( <p>&nbsp;Status: {props.tss[i].sr} </p>)
    con.push(<hr/>)
  }
return(  <div style={{height:"100vh",color:"white",backgroundColor:"powderblue"}}>
   <h1 style={{marginTop:"0",textAlign:"center"}}>Task Manager</h1>
   <div style={{textAlign:"center"}}>
   <h2 >To-do list</h2>
   </div>
   <div  style={{color:"#000000",position:"relative",margin:"auto",overflowY:"scroll",backgroundColor:"white",width:"40%",height:"60%"}}>
{
con
}
   </div>
   <br/>
   <div style={{position:"relative", margin:"auto",width:"20%"}}>
   <Button style={{fontSize:"100%",fontWeight:"bold",backgroundColor:"white",color:"lightblue"}} onClick={props.pss}>Click here to add new Activity</Button>
   </div>
  </div>
);
}

const Act_pg=(props)=>{
return( <div style={{height:"100vh",color:"white",backgroundColor:"powderblue"}}>
   <div style={{textAlign:"center",position:"relative", margin:"auto",width:"20%",paddingTop:"10vh"}}>
   <h1>Activity</h1>
   <input id="txt" style={{width:"100%",height:"3.5vh",fontSize:"2.5vh"}} type="text" placeholder="  Title*"/>
   <br/>
   <br/>
   < textarea id="dis" style={{width:"100%",height:"20vh",fontSize:"2.5vh"}} type="text" placeholder=" Description*"/>
   <br/>
   <br/>
   <input id="dt" style={{width:"100%",height:"3.5vh",fontSize:"2.5vh"}} type="date"/>
   <br/>
   <br/>
   <select id="st" style={{width:"100%",height:"3.5vh",fontSize:"2.5vh"}}>
   <option value="None">None</option>
   <option value="To-Do">To-Do</option>
   <option value="Ongoing">Ongoing</option>
   <option value="Stalled">Stalled</option>
   <option value="Done">Done</option>
   </select>
   <br/>
   <br/>
   <Button style={{position:"relative",width:"10%",margin:"auto",fontSize:"100%",fontWeight:"bold",backgroundColor:"white",color:"lightblue"}} onClick={props.pss}>Add</Button>
<br/>
<p>Note-Title and Description are mandatory. If user don't want to add activity, just press 'Add' without entering title or desription</p>
   </div>
  </div>
);
}

const Con_pg=(props)=>{
return( <div style={{height:"100vh",color:"white",backgroundColor:"powderblue"}}>
   <div style={{textAlign:"center",position:"relative", margin:"auto",width:"20%",paddingTop:"10vh"}}>
   <div style={{textAlign:'left',color:"#000000",position:"relative",margin:"auto",overflowY:"scroll",backgroundColor:"white",width:"100%",height:"60%"}}>
<p>Title: {props.tss.tit}</p>
<p>Discription: {props.tss.des}</p>
<p>Date: {props.tss.date}</p>
<p>Status: {props.tss.sr}</p>
   </div>
   <br/>
   <br/>
   <Button style={{position:"relative",width:"80%",margin:"auto",fontSize:"100%",fontWeight:"bold",backgroundColor:"white",color:"lightblue"}} onClick={props.pss}>Confirm</Button>
<br/>
<br/>

   <Button style={{position:"relative",width:"80%",margin:"auto",fontSize:"100%",fontWeight:"bold",backgroundColor:"white",color:"lightblue"}} onClick={props.nss}>Re-enter</Button>

<br/>
   </div>
  </div>
);
}

class TaskManager extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={lst : 1, todos:[], last:{}};
   this.change=this.change.bind(this);
   this.confirm=this.confirm.bind(this);
   this.noconfirm=this.noconfirm.bind(this);

  }

change()
  {
  if(this.state.lst===1)
  {
    this.setState({lst:2});
  }
  else
  {
    let txt=document.getElementById('txt').value;
    let dis=document.getElementById('dis').value;
    let dt=document.getElementById('dt').value;
    let st=document.getElementById('st').value;
    if(txt!=='' && dis!=='')
    {
    let x={
      tit:txt,
      des:dis,
      date:dt,
      sr:st
    };
    this.setState({lst:3,last:x});
  }
  else{
    this.setState({lst:1});
  }
  }
}

confirm()
{
  let temp=this.state.todos;
  temp.push(this.state.last);
  this.setState({lst:1,todos:temp})
}

noconfirm()
{
  this.setState({lst:2});
}
render()
{
  let x=0;
 if(this.state.lst===2)
   x=<Act_pg pss={this.change}/>
   else if(this.state.lst===1)
    x= <Lst_pg pss={this.change} tss={this.state.todos}/>
    else {
       x=<Con_pg tss={this.state.last} pss={this.confirm} nss={this.noconfirm}/>
    }
  return(
    x
);
}
}

export default TaskManager;
