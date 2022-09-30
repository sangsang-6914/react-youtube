import React from 'react'
import styles from './video_detail.module.css'

function VideoDetail({video, video: {snippet}}) {
  return (
    <section className={styles.detail}>
        <iframe id="ytplayer" type="text/html" width="100%" height="800"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0" title={video.id} />
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>
            {snippet.description}
        </pre>
    </section>
  )
}

export default VideoDetail