import React from 'react';
import { MemorizedVideoItem } from '../video_item/video_item';
import styles from './video_list.module.css';

function VideoList({videos, onVideoClick, display}) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <MemorizedVideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
      ))}
    </ul>
  );
}

export default VideoList;
