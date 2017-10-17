import React, { Component } from 'react'
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

import VenueContainer from './Containers/VenueContainer'

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
		operation,
		variables,
		cacheConfig,
		uploadables,
	) {
		return fetch('http://localhost:5000/graphql', {
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
				query={ graphql`
					query RootContainerQuery {
						allVenues {
							nodes {
								...VenueContainer_venue
							}
						}
					}
				`}
				variables={{}}
				render={({error, props}) => {
					if (error) {
						return <p>{error.message}</p>
					} else if (props) {
						return <div>
							{
								props.allVenues.nodes.map(venue =>
									<VenueContainer key={venue.name} venue={venue}/>
								)
							}
						</div>
					}
					return <p>Loading...</p>
				}
				}
			/>
		);
	}
}
