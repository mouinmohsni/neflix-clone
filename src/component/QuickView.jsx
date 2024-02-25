import React from "react"
import "./QuickView.scss"
import CancelIcon from '@mui/icons-material/Cancel';

function QuickView({ bannerStyle, movie, popup, popupStatus }) {
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
      <div className="quickView-banner" style={bannerStyle}>
        <div className="quickView-content">
          <h3 className="quickView-title">
            {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
        </div>
      </div>
      <button className="quickView-close" onClick={popup}>
        <CancelIcon fontSize="large" />
      </button>
    </div>
  )
}

export default QuickView