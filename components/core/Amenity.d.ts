import * as React from 'react';

/** Amenity row — glyph + bold label + quiet note, on the elevated band. */
export interface AmenityProps {
  /** Glyph or emoji icon. */
  icon?: React.ReactNode;
  label: string;
  note?: string;
  style?: React.CSSProperties;
}

export function Amenity(props: AmenityProps): JSX.Element;
