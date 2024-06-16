import { Preview, Show, Favourite }  from "../../types"
import  supabase from "../../SupaBase/supabaseClient"

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something went wrong. Please try again');
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

const previewUrl = 'https://podcast-api.netlify.app/shows'
const showUrl = (id: string) => `https://podcast-api.netlify.app/id/${id}`

export type Api = {
    getPreviewData: () => Promise<Preview[]>;
    getShowData: (id: string) => Promise<Show>;
    getFavourites: () => Promise<Favourite[]>;
    // addFavourite: (favourite: Favourite) => Promise<void>;
    // removeFavourite: (episode_id: string) => Promise<void>;
  }

const getPreviewData: Api['getPreviewData'] = () => {
  return fetchData<Preview[]>(previewUrl).then(data => {
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format received');
    }
    return data;
  });
}

const getShowData: Api['getShowData'] = (id: string) => {
  return fetchData<Show>(showUrl(id)).then(data => {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format received');
    }
    return data;
  });
};

const getFavourites: Api['getFavourites'] = async () => {
  const { data, error } = await supabase.from('user_favourites').select('*');
  if (error) {
    throw new Error('Failed to fetch favourites');
  }
  return data as Favourite[];
};

export const createApi = (): Api => {
    return {
      getPreviewData,
      getShowData,
      getFavourites
    }
  }