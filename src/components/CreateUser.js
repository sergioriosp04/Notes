import React, { Component } from 'react'

class CreateUser extends Component {
    
    state = {
        users: [],
        username: ""
    }

    getUsers = () => {
        //fetch('http://localhost:4000/api/users') // era en local
        fetch('https://notes-js.herokuapp.com/api/users')
            .then(res => res.json())
            .then(res => {
                this.setState({ users: res })
            })
    }

    componentDidMount(){
        this.getUsers()
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch('https://notes-js.herokuapp.com/api/users',{
            method: 'POST',
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json()
                this.getUsers()
                this.setState({ username: " " })
            })
            .catch(error => console.log('Error', error));
    }

    onChangeUsername = (e)=> {
        this.setState({
            username: e.target.value
        })
    }

    deleteUser = (id) => {
        console.log(id)
        fetch(`https://notes-js.herokuapp.com/api/users/${id}`,{
            method: 'DELETE',
            //body: JSON.stringify(this.id), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json()
                this.getUsers()
            })
            .catch(error => console.log('Error', error));
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> Create a New user </h3>
                        <form onSubmit={this.onSubmitForm} >
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onChangeUsername}
                                    value={this.state.username}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user =>(
                                <li 
                                    onDoubleClick={()=> this.deleteUser(user._id)}
                                    className="list-group-item list-group-item-action" 
                                    key={user._id}
                                >
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateUser