import * as React from 'react';

/**
 * Accessible booking bar — dates + guests + CTA, on a solid surface.
 * @startingPoint section="Booking" subtitle="Date + guests availability bar" viewport="700x150"
 */
export interface BookingBarProps {
  /** Called on submit (preventDefault is handled). Wire to your engine. */
  onSubmit?: (e: React.FormEvent) => void;
  defaultGuests?: string;
  style?: React.CSSProperties;
}

export function BookingBar(props: BookingBarProps): JSX.Element;
