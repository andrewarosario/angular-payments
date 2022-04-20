export interface Payment {
  id: number;
  name: string;
  username?: string;
  title: string;
  value: number;
  date: string;
  image?: string;
  isPayed: boolean;
}
