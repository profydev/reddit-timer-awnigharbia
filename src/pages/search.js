import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
  const { subreddit } = useParams();

  return (
    <div>
      <h1>
        Searching for the best time to post on
        {subreddit}
      </h1>
    </div>
  );
}
