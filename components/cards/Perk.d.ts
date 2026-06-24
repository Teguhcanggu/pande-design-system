import * as React from 'react';

/** Perk tile for the dark "Book direct" band — coral glyph + title + body. */
export interface PerkProps {
  /** Coral glyph, e.g. "◎" "✶" "✆" "↺". */
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Perk(props: PerkProps): JSX.Element;
