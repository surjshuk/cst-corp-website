export function Video({ src, className}) {
    return (
        <video
            autoPlay
            muted
            loop
            className={`${className}`}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
  }