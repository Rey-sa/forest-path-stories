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
        d="M400 100 
           C 280 250, 280 350, 400 500
           C 520 650, 520 750, 400 900  
           C 280 1050, 280 1150, 400 1300
           C 520 1450, 520 1550, 400 1700"
        filter="url(#pathGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Mobile Trail - Straight line down the center */}
      <line
        className="trail-path animate-draw-path md:hidden"
        x1="400" y1="100"
        x2="400" y2="1700"
        filter="url(#pathGlow)"
        strokeLinecap="round"
      />
      
      {/* Trail Footsteps/Markers */}
      <g className="opacity-60">
        <circle cx="400" cy="250" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="400" cy="500" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="400" cy="750" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        <circle cx="400" cy="1000" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '2s'}} />
        <circle cx="400" cy="1250" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '2.5s'}} />
        <circle cx="400" cy="1500" r="4" fill="hsl(var(--trail-brown))" className="animate-pulse" style={{animationDelay: '3s'}} />
      </g>
    </svg>
  );
};