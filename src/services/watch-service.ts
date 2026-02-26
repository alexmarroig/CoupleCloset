import axios from 'axios';

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function getRecommendations(mood: string, duration: number) {
  // Mock results if API key is not present
  if (!TMDB_API_KEY) {
    return [
      { id: 1, title: 'La La Land', genre: 'Romance', rating: 8.0, duration: 128 },
      { id: 2, title: 'Before Sunrise', genre: 'Romance/Drama', rating: 8.1, duration: 105 },
      { id: 3, title: 'About Time', genre: 'Romance/Comedy', rating: 7.8, duration: 123 },
    ];
  }

  // Real TMDB logic would go here
  // For now, return mock data
  return [
    { id: 1, title: 'La La Land', genre: 'Romance', rating: 8.0, duration: 128 },
    { id: 2, title: 'Before Sunrise', genre: 'Romance/Drama', rating: 8.1, duration: 105 },
    { id: 3, title: 'About Time', genre: 'Romance/Comedy', rating: 7.8, duration: 123 },
  ];
}
