import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card'

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        name
        id
        photo
      }
      thumbnail
      durationInSeconds
      modulesCount
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;

/**
 * Which of the following are best practices when creating client querires?
 * - Assign each query string to a constant with an ALL_CAPS name.
 * - include only the field that the client requires.
 * - Test out queries in the Apollo Studio Explorer and Copy them over.
 * - Wrap each query in the gql template literal.
 */