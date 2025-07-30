export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Hexagonal tech pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(60deg, transparent 24%, hsla(var(--primary), 0.1) 25%, hsla(var(--primary), 0.1) 26%, transparent 27%, transparent 74%, hsla(var(--primary), 0.1) 75%, hsla(var(--primary), 0.1) 76%, transparent 77%),
            linear-gradient(-60deg, transparent 24%, hsla(var(--accent), 0.1) 25%, hsla(var(--accent), 0.1) 26%, transparent 27%, transparent 74%, hsla(var(--accent), 0.1) 75%, hsla(var(--accent), 0.1) 76%, transparent 77%)
          `,
          backgroundSize: '40px 40px, 60px 104px, 60px 104px',
          backgroundPosition: '0 0, 0 0, 30px 52px'
        }}
      />
      
      {/* Circuit board lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20,20 L180,20 L180,40 L160,40 L160,80 L120,80 L120,120 L180,120 L180,180 L20,180 L20,160 L40,160 L40,120 L80,120 L80,80 L40,80 L40,40 L20,40 Z" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="1" 
                  opacity="0.3" />
            <circle cx="20" cy="20" r="3" fill="hsl(var(--primary))" opacity="0.5" />
            <circle cx="180" cy="20" r="3" fill="hsl(var(--accent))" opacity="0.5" />
            <circle cx="180" cy="180" r="3" fill="hsl(var(--primary))" opacity="0.5" />
            <circle cx="20" cy="180" r="3" fill="hsl(var(--accent))" opacity="0.5" />
            <circle cx="120" cy="80" r="2" fill="hsl(var(--primary))" opacity="0.4" />
            <circle cx="80" cy="120" r="2" fill="hsl(var(--accent))" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      
      {/* Floating code-like particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono opacity-20 pointer-events-none select-none"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              color: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))',
              animation: `float-code-${i % 4} ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['</>', '{}', '[];', '()', 'fn', 'var', 'if', 'for', '===', '&&', '||', '++'][i % 12]}
          </div>
        ))}
      </div>
      
      {/* Floating geometric particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-geo-${i % 5} ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 4 === 0 && (
              <div className="w-2 h-2 bg-primary/40 transform rotate-45" />
            )}
            {i % 4 === 1 && (
              <div className="w-1 h-1 bg-accent/50 rounded-full" />
            )}
            {i % 4 === 2 && (
              <div className="w-3 h-0.5 bg-primary/30" />
            )}
            {i % 4 === 3 && (
              <svg width="8" height="8" className="text-accent/40">
                <polygon points="4,0 8,4 4,8 0,4" fill="currentColor" />
              </svg>
            )}
          </div>
        ))}
      </div>
      
      {/* Data stream lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px"
            style={{
              width: `${200 + Math.random() * 300}px`,
              left: `-200px`,
              top: `${Math.random() * 100}%`,
              animation: `stream-${i % 3} ${5 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`v-stream-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-accent/20 to-transparent w-px"
            style={{
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `-200px`,
              animation: `v-stream-${i % 2} ${6 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient orbs with subtle movement */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" 
           style={{ animation: "float-slow 12s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" 
           style={{ animation: "float-slow-reverse 15s ease-in-out infinite" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" 
           style={{ animation: "float-medium 9s ease-in-out infinite" }} />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float-code-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px) rotate(5deg); opacity: 0.4; }
        }
        @keyframes float-code-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          33% { transform: translateY(-15px) translateX(-8px) rotate(-3deg); opacity: 0.3; }
          66% { transform: translateY(10px) translateX(15px) rotate(8deg); opacity: 0.4; }
        }
        @keyframes float-code-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(8px) translateX(-12px) rotate(-5deg); opacity: 0.3; }
          75% { transform: translateY(-25px) translateX(6px) rotate(3deg); opacity: 0.4; }
        }
        @keyframes float-code-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          40% { transform: translateY(-18px) translateX(-15px) rotate(-8deg); opacity: 0.3; }
          80% { transform: translateY(12px) translateX(20px) rotate(6deg); opacity: 0.4; }
        }
        
        @keyframes float-geo-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(20px) scale(1.2) rotate(180deg); }
        }
        @keyframes float-geo-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(15px) translateX(-25px) scale(0.8); }
          66% { transform: translateY(-20px) translateX(10px) scale(1.3); }
        }
        @keyframes float-geo-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(-15px) rotate(90deg); }
        }
        @keyframes float-geo-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); }
          25% { transform: translateY(20px) translateX(15px) scale(1.1) rotate(45deg); }
          75% { transform: translateY(-15px) translateX(-20px) scale(0.9) rotate(-45deg); }
        }
        @keyframes float-geo-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-10px) translateX(30px) rotate(-90deg); }
        }

        @keyframes stream-0 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes stream-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes stream-2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }

        @keyframes v-stream-0 {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100vh + 200px)); }
        }
        @keyframes v-stream-1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100vh + 200px)); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(40px, -30px); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-35px, 40px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(25px, -20px) rotate(120deg); }
          66% { transform: translate(-20px, 30px) rotate(240deg); }
        }
      `}</style>
    </div>
  )
}
