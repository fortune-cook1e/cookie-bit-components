import React from 'react';

export type StylesProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Styles({ text }: StylesProps) {
  return (
    <div>
      {text}
    </div>
  );
}
