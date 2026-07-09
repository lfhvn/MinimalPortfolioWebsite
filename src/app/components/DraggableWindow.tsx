import React, { useState, useRef, useEffect } from 'react';

interface DraggableWindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
  isMinimized?: boolean;
  zIndex?: number;
}

export function DraggableWindow({
  id,
  title,
  children,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 600, height: 400 },
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
  isMinimized = false,
  zIndex = 100,
  onFocus
}: DraggableWindowProps & { onFocus?: () => void }) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<string>('');
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStartPos, setResizeStartPos] = useState({ x: 0, y: 0 });
  const [resizeStartSize, setResizeStartSize] = useState({ width: 0, height: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial centering logic
    if (initialPosition.x === 100 && initialPosition.y === 100) {
      const centerX = Math.max(0, (window.innerWidth - size.width) / 2);
      const centerY = Math.max(0, (window.innerHeight - size.height) / 2);
      setPosition({ x: centerX, y: centerY });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        // Keep window within viewport bounds
        const maxX = window.innerWidth - 300; // minimum visible width
        const maxY = window.innerHeight - 100; // minimum visible height

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStartPos.x;
        const deltaY = e.clientY - resizeStartPos.y;

        let newWidth = resizeStartSize.width;
        let newHeight = resizeStartSize.height;
        let newX = position.x;
        let newY = position.y;

        // Handle different resize directions
        if (resizeDirection.includes('right')) {
          newWidth = Math.max(300, resizeStartSize.width + deltaX);
        }
        if (resizeDirection.includes('left')) {
          newWidth = Math.max(300, resizeStartSize.width - deltaX);
          newX = Math.max(0, position.x + deltaX);
        }
        if (resizeDirection.includes('bottom')) {
          newHeight = Math.max(200, resizeStartSize.height + deltaY);
        }
        if (resizeDirection.includes('top')) {
          newHeight = Math.max(200, resizeStartSize.height - deltaY);
          newY = Math.max(0, position.y + deltaY);
        }

        // Constrain to viewport
        const maxWidth = window.innerWidth - newX;
        const maxHeight = window.innerHeight - newY;

        setSize({
          width: Math.min(newWidth, maxWidth),
          height: Math.min(newHeight, maxHeight)
        });

        if (resizeDirection.includes('left') || resizeDirection.includes('top')) {
          setPosition({ x: newX, y: newY });
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeDirection('');
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeStartPos, resizeStartSize, resizeDirection, position]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (onFocus) onFocus();
    
    if (!windowRef.current) return;

    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsResizing(true);
    setResizeDirection(direction);
    setResizeStartPos({ x: e.clientX, y: e.clientY });
    setResizeStartSize({ width: size.width, height: size.height });
  };

  if (isMinimized) {
    return null; // Hidden when minimized
  }

  const windowStyle: React.CSSProperties = isMaximized ? {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: zIndex + 1000
  } : {
    position: 'fixed',
    left: position.x,
    top: position.y,
    width: size.width,
    height: size.height,
    zIndex: zIndex
  };

  return (
    <div
      ref={windowRef}
      className={`aerogel-window ${isMaximized ? 'maximized' : ''}`}
      style={windowStyle}
    >
      {/* Title Bar */}
      <div
        className="aerogel-titlebar"
        onMouseDown={!isMaximized ? handleMouseDown : undefined}
        style={{ cursor: !isMaximized ? 'grab' : 'default' }}
      >
        <div className="aerogel-window-controls">
          <button
            className="aerogel-control close glitch-hover glitch-click"
            onClick={onClose}
            title="Close"
          />
          <button
            className="aerogel-control minimize glitch-hover glitch-click"
            onClick={onMinimize}
            title="Minimize"
          />
          <button
            className="aerogel-control maximize glitch-hover glitch-click"
            onClick={onMaximize}
            title={isMaximized ? 'Restore' : 'Maximize'}
          />
        </div>
        <div className="aerogel-title terminal-glitch glitch-hover" data-text={title}>{title}</div>
        <div className="aerogel-spacer" />
      </div>

      {/* Content */}
      <div className="aerogel-content" style={{ 
        overflow: 'auto',
        height: isMaximized ? 'calc(100vh - 40px)' : 'calc(100% - 40px)',
        padding: '16px'
      }}>
        {children}
      </div>

      {/* Resize Handles - only show when not maximized */}
      {!isMaximized && (
        <>
          {/* Corner handles */}
          <div
            className="aerogel-resize-handle aerogel-resize-nw"
            onMouseDown={(e) => handleResizeStart(e, 'top-left')}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '10px',
              height: '10px',
              cursor: 'nw-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-ne"
            onMouseDown={(e) => handleResizeStart(e, 'top-right')}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '10px',
              height: '10px',
              cursor: 'ne-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-sw"
            onMouseDown={(e) => handleResizeStart(e, 'bottom-left')}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '10px',
              height: '10px',
              cursor: 'sw-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-se"
            onMouseDown={(e) => handleResizeStart(e, 'bottom-right')}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '10px',
              height: '10px',
              cursor: 'se-resize',
              zIndex: 10
            }}
          />

          {/* Edge handles */}
          <div
            className="aerogel-resize-handle aerogel-resize-n"
            onMouseDown={(e) => handleResizeStart(e, 'top')}
            style={{
              position: 'absolute',
              top: 0,
              left: '10px',
              right: '10px',
              height: '5px',
              cursor: 'n-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-s"
            onMouseDown={(e) => handleResizeStart(e, 'bottom')}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '10px',
              right: '10px',
              height: '5px',
              cursor: 's-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-w"
            onMouseDown={(e) => handleResizeStart(e, 'left')}
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: 0,
              width: '5px',
              cursor: 'w-resize',
              zIndex: 10
            }}
          />
          <div
            className="aerogel-resize-handle aerogel-resize-e"
            onMouseDown={(e) => handleResizeStart(e, 'right')}
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              right: 0,
              width: '5px',
              cursor: 'e-resize',
              zIndex: 10
            }}
          />
        </>
      )}
    </div>
  );
}