
export interface drawer {
  id:number;
  icon: string;
  title: string;
  page: string;
  subNav: subNav|null;
}
export interface subNav {
  id:number;
  icon: string;
  title: string;
  page: string;
}
