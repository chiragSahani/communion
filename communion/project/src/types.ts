export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Religious' | 'Social' | 'Charity';
}