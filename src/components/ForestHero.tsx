import forestHeroBg from '@/assets/forest-hero-bg.jpg';

export const ForestHero = () => {
  return (
    <header 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${forestHeroBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="title-forest text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in drop-shadow-2xl" 
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6)' }}>
          Tinas Toller Tag
        </h1>
        <p className="text-earth-cream text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in font-medium drop-shadow-lg" 
           style={{animationDelay: '0.5s', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>
          Folge mir auf einer wunderschönen Wanderung durch die Natur
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-earth-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-earth-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};