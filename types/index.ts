export interface IButton {
  title: string;
}
export interface ItemCircleNumbersProps {
  title: string;
  description: string;
}

export interface ItemInfoProps {
  title: string;
  description: string;
  pathImg?: string;
  index: number;
}

export interface HeaderProps {
  homepageOverflowRef: React.RefObject<HTMLDivElement>;
}

export interface CarrouselProps {
  Component: React.ElementType;
  data: ItemInfoProps[];
}
