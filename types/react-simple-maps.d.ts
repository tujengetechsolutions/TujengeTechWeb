// Minimal typings for react-simple-maps (the package ships no types).
declare module 'react-simple-maps' {
  import type { CSSProperties, ReactNode, SVGProps } from 'react';

  export interface GeographyObject {
    rsmKey: string;
    [key: string]: unknown;
  }

  export interface ComposableMapProps extends SVGProps<SVGSVGElement> {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
      parallels?: [number, number];
    };
    width?: number;
    height?: number;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    className?: string;
    children: (data: { geographies: GeographyObject[] }) => ReactNode;
  }

  export interface GeographyProps
    extends Omit<SVGProps<SVGPathElement>, 'style'> {
    geography: GeographyObject;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
  }

  export interface MarkerProps extends SVGProps<SVGGElement> {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const ComposableMap: (props: ComposableMapProps) => JSX.Element;
  export const Geographies: (props: GeographiesProps) => JSX.Element;
  export const Geography: (props: GeographyProps) => JSX.Element;
  export const Marker: (props: MarkerProps) => JSX.Element;
}
