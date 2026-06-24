import * as React from 'react';

/** Guest review card — coral stars, italic serif quote, muted cite. */
export interface ReviewProps {
  quote: string;
  /** Attribution line, e.g. "— Guest review, illustrative". */
  author: string;
  /** Whole-star rating 1–5. @default 5 */
  rating?: number;
  style?: React.CSSProperties;
}

export function Review(props: ReviewProps): JSX.Element;
