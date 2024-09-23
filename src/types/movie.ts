export type TMovie = {
  id: number;
  name: string;
  posterUrl: string | null;
  rating: number;
  year: number;
  countries: { name: string }[];
};
