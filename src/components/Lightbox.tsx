import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <button 
        className="lightbox-close glitch-hover"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '8px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 100000
        }}
      >
        <X size={24} />
      </button>

      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          position: 'relative'
        }}
      >
        <ImageWithFallback 
          src={src} 
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '4px',
            boxShadow: '0 0 50px rgba(0,0,0,0.5)'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'white',
          fontFamily: 'var(--terminal-font)',
          fontSize: '14px',
          opacity: 0.8
        }}>
          {alt}
        </div>
      </div>
    </div>
  );
}
