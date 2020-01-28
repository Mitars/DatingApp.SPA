import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  gender: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: any;
  city: string;
  country: string;
  photoUrl: string;
  introduction?: string;
  lookingFor?: string;
  interests?: string;
  photos?: Photo[];
  roles?: string[];
}
