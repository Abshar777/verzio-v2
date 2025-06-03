import React from 'react';
import { motion } from 'framer-motion';

interface GaugeProps {
  value: number; // 0 to 100
  size?: number;
  thickness?: number;
}

const Gauge: React.FC<GaugeProps> = ({ 
  value = 50, 
  size = 180, 
  thickness = 20 
}) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));
  
  // Calculate angle based on value (180 degrees total arc)
  const angle = (clampedValue / 100) * 180;
  
  // Calculate stroke dash array and offset
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = circumference - (angle / 360) * circumference;

  return (
    <div className="rounded-lg w-full  p-6 flex items-center justify-center">
      <div style={{ width: size, height: size / 2 }} className="relative overflow-hidden">
        {/* Background arc */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute top-0 left-0"
        >
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          
         
          <path
            d={`M ${thickness / 2} ${size / 2} 
                A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`}
            fill="none"
            stroke="#FFFFFF33"
            strokeWidth={thickness}
            strokeLinecap="round"
          />
          
          {/* Value arc */}
          <motion.path
            d={`M ${thickness / 2} ${size / 2} 
                A ${radius} ${radius} 0 0 1 ${size - thickness / 2} ${size / 2}`}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={dashArray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Center indicator/needle */}
          <circle cx="90" cy="90" r="6.666666666666667" fill="#000" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}></circle>
        </svg>
      </div>
    </div>
  );
};

export default Gauge;