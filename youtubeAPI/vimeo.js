import axios from 'axios';

const VIMEO_API_URL = 'https://api.vimeo.com/videos';
const VIMEO_ACCESS_TOKEN = 'c1dc58fa180ae33cdd16ab30b744dc4142a05f84'; // Substitua pelo seu token de acesso do Vimeo

export const buscarVideos = async (query) => {
  try {
    const response = await axios.get(VIMEO_API_URL, {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Erro ao pesquisar vídeos no Vimeo:', error);
    throw error;
  }
};
