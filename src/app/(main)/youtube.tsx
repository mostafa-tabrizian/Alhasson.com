'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export type Props = {
   video: {
      source: string
      title: string
   }
}

export default function YouTubeFrame({ video }: Props) {
   return (
      <LiteYouTubeEmbed aspectHeight={9} aspectWidth={16} id={video?.source} title={video?.title} />
   )
}
