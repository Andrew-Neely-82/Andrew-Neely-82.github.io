const LoadingAnimation = () => {
  return (
    <>
      <svg id="loading" className="LoadingAnimation__" viewBox="0 0 100 80">
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4383b8" />
            <stop offset="100%" stopColor="#4aa06c" />
          </linearGradient>
          <clipPath id="rects">
            <rect className="rect" id="rect1" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect2" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect3" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect4" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect5" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect6" x="0" y="0" width="30" height="30" rx="2" ry="2" />
            <rect className="rect" id="rect7" x="0" y="0" width="30" height="30" rx="2" ry="2" />
          </clipPath>
        </defs>
        <rect id="container" transform="translate(50) scale(0.707, 0.707) rotate(45)" x="0" y="0" width="100" height="100" fill="url(#gradient)" clipPath="url(#rects)"></rect>
      </svg>
      <p className="LoadingAnimation__span">This application was built in React and uses SCSS for styling</p>
    </>
  );
};
export default LoadingAnimation;
