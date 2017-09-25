import {
		Environment,
		Network,
		RecordSource,
		Store
} from 'relay-runtime'
import {
QueryRenderer,
graphql
} from 'react-relay'

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
		operation,
		variables,
		cacheConfig,
		uploadables,
	) {
		return fetch('http://192.168.1.140:5000/graphql', {
			method: 'POST',
			headers: {
				// Add authentication and other headers here
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				query: operation.text, // GraphQL text from input
				variables,
			}),
		}).then(response => {
			return response.json();
		});
	}
	
	const source = new RecordSource()
	const store = new Store(source)
	const network = Network.create(fetchQuery)
	const handlerProvider = null
	
	const environment = new Environment({
		handlerProvider,
		network,
		store
	})


export default class RootContainer extends Component {
	render() {
		return (
			<QueryRenderer
				environment={environment}
				query={graphql`
					query RootContainerQuery {
						allVenues {
							edges {
								node {
									name
									playlist: playlistByPlaylist {
										title
										songs: playlistSongsByPlaylistId {
											edges {
												node {
													songBySongId {
														title
													}
												}
											}
										}
									}
								}
							}
						}
					}
				`}
				variables={{}}
				render={({error, props}) => {
					console.log('props', props)
					if (error) {
						return <Text>{error.message}</Text>
					} else if (props) {
						return <Text>{props.allVenues[0].name}</Text>
					}
					return <Text>Loading...</Text>
				}
				}
			/>
		);
	}
}
