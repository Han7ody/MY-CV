export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Yellow moon/circle */}
      <div className="absolute top-20 left-[15%] w-6 h-6 border-4 border-shape-yellow rounded-full animate-float opacity-60" />
      
      {/* Pink triangle */}
      <div className="absolute top-[35%] left-[25%] animate-float-delayed">
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-shape-pink opacity-80">
          <polygon points="10,2 18,18 2,18" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Purple inverted triangle */}
      <div className="absolute top-[15%] right-[30%] animate-float-slow">
        <svg width="16" height="16" viewBox="0 0 20 20" className="text-shape-purple opacity-70">
          <polygon points="2,2 18,2 10,18" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Cyan wavy line */}
      <div className="absolute top-[40%] right-[15%] animate-float-delayed">
        <svg width="30" height="20" viewBox="0 0 30 20" className="text-shape-cyan opacity-80">
          <path d="M2,15 Q8,5 14,15 Q20,25 26,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Yellow arc at top left */}
      <div className="absolute top-[8%] left-[30%] animate-float">
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-shape-yellow opacity-70">
          <path d="M5,15 Q10,5 15,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Cyan arc bottom left */}
      <div className="absolute bottom-[35%] left-[20%] animate-float-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-shape-cyan opacity-60">
          <path d="M5,12 Q12,20 19,12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Pink double wave bottom */}
      <div className="absolute bottom-[20%] left-[45%] animate-float-delayed">
        <svg width="30" height="20" viewBox="0 0 30 20" className="text-shape-pink opacity-70">
          <path d="M2,10 Q8,2 14,10 Q20,18 26,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Purple slash top */}
      <div className="absolute top-[10%] left-[50%] animate-float-slow">
        <svg width="16" height="24" viewBox="0 0 16 24" className="text-shape-purple opacity-50">
          <line x1="12" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Cyan arc right side */}
      <div className="absolute top-[8%] right-[10%] animate-float">
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-shape-cyan opacity-60">
          <path d="M15,5 Q20,10 15,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Purple slash bottom right */}
      <div className="absolute bottom-[40%] right-[25%] animate-float-delayed">
        <svg width="16" height="20" viewBox="0 0 16 20" className="text-shape-purple opacity-50">
          <line x1="4" y1="4" x2="12" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Yellow arc bottom right */}
      <div className="absolute bottom-[15%] right-[12%] animate-float-slow">
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-shape-yellow opacity-60">
          <path d="M5,15 Q10,5 15,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};
