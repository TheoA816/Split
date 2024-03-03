export type Friend = { email: string; name: string; profilePicture: string };
export type BillOverview = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  items: {
    name: string;
    cost: number;
  }[];
  profilePics: string[];
};
