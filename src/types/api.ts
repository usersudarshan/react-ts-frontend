export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  year: number;
  rating: string;
  image?: string;
  cast?: string[];
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
}
