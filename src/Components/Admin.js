import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export class Admin extends Component {
    
    constructor(props) {
    super(props)

    this.state = {
         allviewApplication:[]
    }
}
 componentDidMount(){
    var arr=JSON.parse(localStorage.getItem('UsersData'))
    this.setState({
        allviewApplication:arr
    })
}

activate=(e)=>{
var person=e.target.value
var arr=JSON.parse(localStorage.getItem('UsersData'))

for(var i=0;i<arr.length;i++){
    if(arr[i].FirstName==person){
        arr[i].isUserActive=true
        arr[i].status='Activate'
        this.setState({
            allviewApplication:arr
        })
        break;
    }
}

localStorage.setItem('UsersData',JSON.stringify(arr))
}

deactivate=(e)=>{
    var person=e.target.value
    var arr=JSON.parse(localStorage.getItem('UsersData'))
    
    for(var i=0;i<arr.length;i++){
        if(arr[i].FirstName==person){
            arr[i].isUserActive=false
            arr[i].status='Deactivate'
            this.setState({
                allviewApplication:arr
            })
            break;
        }
    }
    localStorage.setItem('UsersData',JSON.stringify(arr))
    }

renderingViewApplication=()=>{
return this.state.allviewApplication.map((application,index)=>{
    const {FirstName,isUserActive,status}=application
    return (
        <tr key={index}>
            <td style={{ color: 'blue' }}> {FirstName}</td>
            <td style={{ color: 'blue' }}> {status}</td>
            
            <td style={{ color: 'blue' }}> {isUserActive}</td>
            <td> 
                <button onClick={this.activate} value={FirstName} className="btn btn-primary"> Activate</button>&nbsp;&nbsp;
                <button onClick={this.deactivate} value={FirstName} className='btn btn-primary'> Deactivate</button>
                        
            </td>


        </tr>
    )
})
    }

    render() {
        return (
            <div className='container'>
                <h2 style={{ color: 'red' }}> welcome Admin</h2>
                <Navbar bg="dark" expand="sm">
               
                   <Nav>
                       <NavLink className="d-inline p-0 bg-dark text-white"
                       to="/">Sign Out</NavLink>
                       
                       
                   </Nav>
               
    </Navbar>
                <table className='table table-hover striped m-5' border='1'>
                   <tr>
                   <th scope='col' style={{ color: 'yellow' }}>UserName </th>
                           
                            <th scope='col' style={{ color: 'yellow' }}>Status</th>
                            <th scope='col' style={{ color: 'yellow' }}>Action </th>
                   </tr>
                    {this.renderingViewApplication()}
                    </table>
            </div>
        )
    }
}

export default Admin
