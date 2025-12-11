import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const PLANETS = [
  { x: 300, y: 50 },
  { x: 50, y: 100 },
  { x: 700, y: 300 },
];

const GravAssistDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draggableNodeRef = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 400, y: 300 });
  const [forceVector, setForceVector] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(true);

  const WIDTH = 800;
  const HEIGHT = 600;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let result = { x: 0, y: 0 };
    const playerCenterX = position.x + 10;
    const playerCenterY = position.y + 10;

    PLANETS.forEach((planet) => {
      // Gravity Line
      ctx.beginPath();
      ctx.moveTo(playerCenterX, playerCenterY);
      ctx.lineTo(planet.x, planet.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'; 
      ctx.lineWidth = 1;
      ctx.stroke();

      // Physics
      const dx = playerCenterX - planet.x;
      const dy = playerCenterY - planet.y;
      const dist = Math.sqrt(dx ** 2 + dy ** 2);
      if (dist > 5) {
          result = { 
            x: result.x - (dx / (dist ** 3)), 
            y: result.y - (dy / (dist ** 3)) 
          };
      }

      // Draw Planet
      ctx.beginPath();
      ctx.arc(planet.x, planet.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#4ade80';
      ctx.fill();
    });

    const forceScale = 3000000; 
    setForceVector({ x: result.x * forceScale, y: result.y * forceScale });
    
    ctx.beginPath();
    ctx.moveTo(playerCenterX, playerCenterY);
    ctx.lineTo(
      playerCenterX + forceVector.x, 
      playerCenterY + forceVector.y
    );
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(playerCenterX, playerCenterY - 25); // Top
    ctx.lineTo(playerCenterX + 15, playerCenterY); // Right
    ctx.lineTo(playerCenterX, playerCenterY + 25); // Bottom
    ctx.lineTo(playerCenterX - 15, playerCenterY); // Left
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

  }, [position]);

  const handleDrag = (e: any, data: { x: number, y: number }) => {
    setPosition({ x: data.x, y: data.y });
    setShowTooltip(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      
      <div 
        className="relative border border-slate-600 bg-slate-800 shadow-2xl rounded-lg overflow-hidden" 
        style={{ width: WIDTH, height: HEIGHT }}
      >
        {showTooltip && (
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
                <p className="text-white font-bold text-2xl animate-pulse drop-shadow-md">
                   Drag the white diamond
                </p>
            </div>
        )}
        
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="block" />
        
        <Draggable
          nodeRef={draggableNodeRef}
          bounds="parent"
          position={position}
          onDrag={handleDrag}
        >
          <div
            ref={draggableNodeRef}
            className="absolute top-0 left-0 hover:cursor-grab active:cursor-grabbing"
            style={{
              width: '20px',
              height: '20px',
              background: 'transparent',
              zIndex: 20
            }}
          />
        </Draggable>
      </div>
      
      <div className="mt-4 font-mono text-slate-400 text-sm">
        Coordinates: {Math.round(position.x)}, {Math.round(position.y)}; Force Vector: (
        {forceVector.x.toFixed(3)}, 
        {-forceVector.y.toFixed(3)})
      </div>
    </div>
  );
};

export default GravAssistDemo;