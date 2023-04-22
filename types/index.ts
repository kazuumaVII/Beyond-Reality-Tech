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
  pathImg: string;
}

export interface HeaderProps {}

export interface CarrouselProps {
  Component: React.ElementType;
  data: ItemInfoProps[];
}
