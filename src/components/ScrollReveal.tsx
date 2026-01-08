import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translateY(0)" : "translateY(40px)";
      case "down":
        return isVisible ? "translateY(0)" : "translateY(-40px)";
      case "left":
        return isVisible ? "translateX(0)" : "translateX(40px)";
      case "right":
        return isVisible ? "translateX(0)" : "translateX(-40px)";
      case "scale":
        return isVisible ? "scale(1)" : "scale(0.9)";
      default:
        return isVisible ? "translateY(0)" : "translateY(40px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
