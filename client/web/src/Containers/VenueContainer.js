import React, { Component } from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

import PlaylistContainer from './PlaylistContainer'

class Venue extends Component {
	render() {
		const venue = this.props.venue
		return (<div>
			<p>{ venue.name }</p>
			<PlaylistContainer playlist={ venue.playlistByPlaylist }/>
		</div>)
	}
}

let VenueContainer = createFragmentContainer(Venue, {
	venue: graphql`
		fragment VenueContainer_venue on Venue {
			name
			playlistByPlaylist {
				...PlaylistContainer_playlist
			}
		}
	`
})

export default VenueContainer