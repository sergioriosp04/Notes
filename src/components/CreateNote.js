import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class CreateNote extends Component {

    state={
        users: [],
        userSelected: "",
        title: "",
        content:"",
        date: new Date(),
        editing: false,
        _id: ""
    }

    getUsers = () => {
        //fetch('http://localhost:4000/api/users') corria en local
        fetch('https://notes-js.herokuapp.com/api/users')
            .then(res => res.json())
            .then(res => {
                this.setState({ 
                    users: res.map(user => user.username), 
                    userSelected: res[0].username
                })
            })
    }

    componentDidMount() {
        this.getUsers()
        if(this.props.match.params.id){
            fetch(`https://notes-js.herokuapp.com/api/notes/${this.props.match.params.id}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ 
                        title: data.title,
                        content: data.content,
                        userSelected: data.author,
                        date: new Date(data.date),
                        editing: true,
                        _id: this.props.match.params.id
                    })
                })
        }
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        if(this.state.editing){
            fetch(`https://notes-js.herokuapp.com/api/notes/${this.state._id}`,{
                method: 'PUT',
                body: JSON.stringify(newNote), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    res.json()
                    this.props.history.push('/')
                }) 
                .catch(error => console.log('Error', error))
        }else{
            fetch('https://notes-js.herokuapp.com/api/notes',{
                method: 'POST',
                body: JSON.stringify(newNote), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    res.json()
                    this.props.history.push('/')
                }) 
                .catch(error => console.log('Error', error))
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date =>{
        this.setState({
            date: date
        })
    }

    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4> Create a Note</h4>
                    {/*SELECT USER*/}
                    <div className="form-group">
                        <select 
                            className="form-control" 
                            name="userSelected"
                            onChange={this.onInputChange}
                            value={this.state.userSelected}
                        >
                            {
                                this.state.users.map(user => 
                                <option key={user} value={user} >
                                    {user}
                                </option>)
                            }

                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="title" 
                            name="title"
                            required 
                            onChange={this.onInputChange}
                            value={this.state.title}
                            />
                    </div>

                    <div className="form-group">
                        <textarea  
                            className="form-control" 
                            placeholder="content" 
                            name="content"
                            required 
                            onChange={this.onInputChange}
                            value={this.state.content}
                            />
                    </div>

                    <div className="form-group">
                        <DatePicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}

export default CreateNote