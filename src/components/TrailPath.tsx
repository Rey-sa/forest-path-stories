export const TrailPath = () => {
  return (
    <svg 
      className="w-full h-full" 
      viewBox="0 0 800 2000" 
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <filter id="pathGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main Trail Path - Hidden on mobile, visible on desktop */}
      <path
        className="trail-path animate-draw-path hidden md:block"
        d="M400 80 
           C 200 200, 200 280, 400 400
           C 600 520, 600 600, 400 720  
           C 200 840, 200 920, 400 1040
           C 600 1160, 600 1240, 400 1360"
        filter="url(#pathGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Mobile Trail - Straight line down the center */}
      <line
        className="trail-path animate-draw-path md:hidden"
        x1="400" y1="80"
        x2="400" y2="1360"
        filter="url(#pathGlow)"
        strokeLinecap="round"
      />
      
      {/* Trail Footsteps/Markers positioned at each step */}
      <g className="opacity-60">
        <circle cx="400" cy="240" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="400" cy="560" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="400" cy="880" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        <circle cx="400" cy="1200" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '2s'}} />
      </g>
    </svg>
  );
};