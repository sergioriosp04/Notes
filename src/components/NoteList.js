import React, { Component } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

class NoteList extends Component {

    state={
        notes:[]
    }

    getNotes = () => {
        fetch('https://notes-js.herokuapp.com/api/notes')
            .then(res =>res.json())
            .then(data => {
                this.setState({
                    notes: data
                })
                console.log(this.state)
            })
    }       
 
    componentDidMount(){
        this.getNotes()
    }

    deleteNote = (id)=>{
        console.log(id)
        fetch(`https://notes-js.herokuapp.com/api/notes/${id}`,{
            method: 'DELETE',
            //body: JSON.stringify(this.id), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                res.json()
                this.getNotes()
            })
            .catch(error => console.log('Error', error))
    }

    render(){
        return(
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    <Link to={`/edit/${note._id}`} className="btn btn-secondary">
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id) }>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default NoteList