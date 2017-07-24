import React, { Component } from 'react'
// import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: []
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data})
      })
  }

  fetchData (event) {
   event.preventDefault()
   console.log('clicked update')
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
     return results.json()
   }).then(data => {
     this.setState({songs: data})
     console.log('clicked update')
   })
  }

  render () {
    return (
      <div>
        <div>
          <form onSubmit={this.fetchData}>
          <button type="submit" className="btn btn-success">Update</button>
          </form>
        </div>
        <div className='playlist'>
          {this.state.songs.map( (result) =>
          <div className="card" key={result._id}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Username: {result.userName}</li>
              <li className="list-group-item">Artist/Band: {result.songArtist}</li>
              <li className="list-group-item">Song Title: {result.songTitle}</li>
              <li className="list-group-item">Song notes: {result.songNotes}</li>
            </ul>
          </div>
          )}
        </div>
      </div>
    )
  }
}
