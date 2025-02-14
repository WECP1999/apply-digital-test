import classNames from 'classnames';
import { useState } from 'react';

interface ShortTextProps {
  text: string;
  maxLength: number;
  className?: string;
}

const ShortText = ({ text, maxLength, className }: ShortTextProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const isTruncated = text.length > maxLength;
  const displayText = isTruncated ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className="relative inline-block">
      <span
        className={className}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {displayText}
      </span>

      {isTruncated && showTooltip && (
        <div className="absolute left-1/2 bottom-full mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg bg-black px-3 py-1 text-white text-sm shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default ShortText;
