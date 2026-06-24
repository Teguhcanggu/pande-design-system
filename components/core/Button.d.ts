import * as React from 'react';

/**
 * Pande pill button — coral primary CTA or ghost outline.
 * @startingPoint section="Core" subtitle="Coral & ghost pill buttons" viewport="700x140"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "coral" */
  variant?: 'coral' | 'ghost';
  /** Render as a link to this URL instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Use light borders/text when placed on a dark surface. */
  onDark?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
