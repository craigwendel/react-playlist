import React, { Component } from 'react'

export default class PlayListItem extends Component {
  
  render () {
    return (
      <div>
        <div className='playlist'>
          {this.props.songs.map( (result) =>
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
