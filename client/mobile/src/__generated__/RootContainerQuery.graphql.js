/**
 * @flow
 * @relayHash 858c49368e46a8c7fca4991b26792de4
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RootContainerQueryResponse = {|
  +allVenues: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +name: string;
        +playlist: ?{|
          +title: ?string;
          +songs: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: {|
                +songBySongId: ?{|
                  +title: string;
                |};
              |};
            |}>;
          |};
        |};
      |};
    |}>;
  |};
|};
*/


/*
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
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "VenuesConnection",
        "name": "allVenues",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "VenuesEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Venue",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "playlist",
                    "args": null,
                    "concreteType": "Playlist",
                    "name": "playlistByPlaylist",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "songs",
                        "args": null,
                        "concreteType": "PlaylistSongsConnection",
                        "name": "playlistSongsByPlaylistId",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "PlaylistSongsEdge",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "PlaylistSong",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Song",
                                    "name": "songBySongId",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "title",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RootContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "RootContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "VenuesConnection",
        "name": "allVenues",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "VenuesEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Venue",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "playlist",
                    "args": null,
                    "concreteType": "Playlist",
                    "name": "playlistByPlaylist",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "songs",
                        "args": null,
                        "concreteType": "PlaylistSongsConnection",
                        "name": "playlistSongsByPlaylistId",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "PlaylistSongsEdge",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "PlaylistSong",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Song",
                                    "name": "songBySongId",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "title",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query RootContainerQuery {\n  allVenues {\n    edges {\n      node {\n        name\n        playlist: playlistByPlaylist {\n          title\n          songs: playlistSongsByPlaylistId {\n            edges {\n              node {\n                songBySongId {\n                  title\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
