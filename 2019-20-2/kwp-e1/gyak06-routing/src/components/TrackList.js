import React from "react";
import { Track } from "./TrackList/Track";

export function TrackList({ tracks }) {
  return (
    <div className="ui very relaxed selection list">
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}
