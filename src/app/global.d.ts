// global.d.ts
import React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      name?: string;
    };
  }
  interface IntrinsicElements {
    'activities-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
  
}

