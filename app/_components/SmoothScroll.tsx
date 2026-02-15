"use client";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: any }) {
      return (
            <ReactLenis
                  root
                  options={{
                        lerp: 0.08,
                        duration: 1.2,
                        smoothWheel: true,
                        wheelMultiplier: 1,
                        touchMultiplier: 2,
                  }}
            >
                  {children}
            </ReactLenis>
      );
}