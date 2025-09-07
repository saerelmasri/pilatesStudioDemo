export type Branch = {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hours: { d: string; h: string }[];
  gmapsQuery: string;
  mapsEmbedUrl: string;
};
