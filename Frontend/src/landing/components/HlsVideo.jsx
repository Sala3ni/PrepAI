import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function HlsVideo({ src, className = '', style = {}, desaturate = false }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={{ ...(desaturate ? { filter: 'saturate(0)' } : {}), ...style }}
    />
  )
}
