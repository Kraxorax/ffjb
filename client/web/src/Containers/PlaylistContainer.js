import React, { Component } from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

import SongContainer from './SongContainer'

class Playlist extends Component {
	render() {
		const playlist = this.props.playlist
		console.log('props', this.props)
		return (<div>
			<p>{ playlist.title }</p>
			{ playlist.playlistSongsByPlaylistId.nodes.map(song =>
					<SongContainer song={ song.songBySongId }/>
			)}
		</div>)
	}
}

let PlaylistContainer = createFragmentContainer(Playlist, {
	playlist: graphql`
		fragment PlaylistContainer_playlist on Playlist {
			title
			playlistSongsByPlaylistId {
				nodes {
					songBySongId {
						...SongContainer_song
					}
				}
			}
		}
	`
})

export default PlaylistContainer