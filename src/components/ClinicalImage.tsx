import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ClinicalImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ClinicalImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: ClinicalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-800 dark:to-teal-950/60 p-6 text-center"
      >
        <Sparkles className="w-6 h-6 text-teal-700 dark:text-teal-400" strokeWidth={1.5} />
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 max-w-[200px]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
