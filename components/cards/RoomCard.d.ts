import * as React from 'react';

/**
 * Bento room card — full-bleed photo, scrim, title + blurb + CTA link.
 * @startingPoint section="Cards" subtitle="Bento room cards with photo & scrim" viewport="700x440"
 */
export interface RoomCardProps {
  image: string;
  /** Unique, descriptive alt text (required for a11y). */
  alt: string;
  name: string;
  blurb?: string;
  href?: string;
  /** Corner badge, e.g. "Signature". */
  tag?: string;
  /** Grid footprint. @default "std" */
  span?: 'std' | 'tall' | 'wide';
  style?: React.CSSProperties;
}

export function RoomCard(props: RoomCardProps): JSX.Element;
