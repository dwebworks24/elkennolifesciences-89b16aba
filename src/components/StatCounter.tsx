import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = "", label, duration = 1600 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-primary">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
