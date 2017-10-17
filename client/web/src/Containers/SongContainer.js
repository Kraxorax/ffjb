import React, { Component } from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'


class Song extends Component {
	render() {
		const song = this.props.song
		return (
			<p>{ song.title }</p>
		)
	}
}

let SongContainer = createFragmentContainer(Song, {
	song: graphql`
		fragment SongContainer_song on Song {
			title
		}
	`
})

export default SongContainer