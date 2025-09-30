import { useEffect, useRef } from 'react';
import { TimelineStep } from './TimelineStep';
import { TrailPath } from './TrailPath';
import { FloatingParticles } from './FloatingParticles';

import step1Image from '@/assets/step1-morning.jpg';
import step2Image from '@/assets/step2-mountain.jpg';
import step3Image from '@/assets/step3-waterfall.jpg';
import step4Image from '@/assets/step4-sunset.jpg';

const timelineSteps = [
  {
    id: 1,
    title: "Morning Walk",
    description: "I started the day with a refreshing walk through the forest. The morning mist created magical atmosphere as sunlight filtered through the canopy.",
    image: step1Image,
    side: 'left' as const
  },
  {
    id: 2,
    title: "Mountain View", 
    description: "The path led me to a stunning viewpoint overlooking the mountains. The layered hills stretched endlessly into the distance.",
    image: step2Image,
    side: 'right' as const
  },
  {
    id: 3,
    title: "Waterfall Discovery",
    description: "Next, I arrived at a beautiful waterfall nestled in a serene spot. The sound of cascading water was incredibly peaceful.",
    image: step3Image,
    side: 'left' as const
  },
  {
    id: 4,
    title: "Sunset Finale",
    description: "I concluded the day by watching the sunset paint the sky in golden hues. A perfect end to an amazing hiking adventure.",
    image: step4Image,
    side: 'right' as const
  }
];

export const HikingTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const steps = document.querySelectorAll('.timeline-step');
      steps.forEach((step) => observer.observe(step));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen" ref={timelineRef}>
      <FloatingParticles />
      
      {/* Trail Path SVG */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-full max-w-6xl pointer-events-none z-10">
        <TrailPath />
      </div>

      {/* Timeline Steps */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
        {timelineSteps.map((step, index) => (
          <TimelineStep
            key={step.id}
            step={step}
            index={index}
            totalSteps={timelineSteps.length}
          />
        ))}
      </div>
    </div>
  );
};