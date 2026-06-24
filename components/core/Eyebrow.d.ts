import * as React from 'react';

/**
 * Uppercase tracked eyebrow label with a coral tick — sits above headings.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Light variant for dark surfaces. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
