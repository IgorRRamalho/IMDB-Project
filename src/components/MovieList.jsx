// eslint-disable-next-line no-unused-vars
import { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  query GetMovie {
    page
    results{
      id
    }
  }
`;

export default function MovieList() {
  const { loading, error, data } = useQuery(GET_MOVIE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.results.map(({ id, original_title, release_date}) => (
    <div key={id}>
      <h3>{original_title}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <b>Release_date:</b>
      <p>{release_date}</p>
      <br />
    </div>
  ));
}

// {
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
//         "genre_ids": [
//           28,
//           12,
//           878
//         ],
//         "id": 640146,
//         "original_language": "en",
//         "original_title": "Ant-Man and the Wasp: Quantumania",
//         "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
//         "popularity": 8567.865,
//         "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
//         "release_date": "2023-02-15",
//         "title": "Ant-Man and the Wasp: Quantumania",
//         "video": false,
//         "vote_average": 6.5,
//         "vote_count": 1886
//     }
