import { createStore as createZustandStore, StoreApi } from "zustand";
// import { createStore } from "zustand";
import { Api, createApi } from "../../components/api/createApi.ts"
import { Preview, Show, Favourite } from "../../types.ts"



export type Store = {
    phase: "LISTING" | "LOADING" | "ERROR";
    list: Preview[];
    showPhase: "LOADING" | "LOADED" | "ERROR" 
    show: Show | null;
    favourites: Favourite[];
    fetchShowData: (id: string) => void;
    fetchFavourites:  () => void;
}

const createTypedStore = createZustandStore<Store>();

export const createStore = (api: Api): StoreApi<Store> => {
  const store = createTypedStore (() => ({
    phase: "LOADING",
    list: [],
    showPhase: "LOADING",
    show: null,
    favourites: [],

    fetchShowData: (id: string) => {
      api.getShowData(id).then((data: Show) => {
        store.setState({
          showPhase: "LOADED",
          show: data,
        });
      }).catch(() => {
        store.setState({
          showPhase: "ERROR",
        });
      });
    },

    fetchFavourites: () => {
      console.log("Fetching favourites...");
      api.getFavourites().then((data: Favourite[]) => {
        console.log("Favourites fetched:", data);
        store.setState({
          favourites: data,
        });
      }).catch((error) => {
        console.error("Error fetching favourites:", error);
      });
    },

    // addFavourite: (favourite: Favourite) => {
    //   store.setState((state) => ({
    //     favourites: [...state.favourites, favourite],
    //   }));
    // },

    // removeFavourite: (episodeId: string) => {
    //   store.setState((state) => ({
    //     favourites: state.favourites.filter(fav => fav.episodeId !== episodeId),
    //   }));
    // }
  }));

  api.getPreviewData().then((data: Preview[]) => {
    if (data instanceof Error) {
      return store.setState({
        phase: "ERROR",
      });
    }

    store.setState({
      phase: "LISTING",
      list: data,
    })
  })

  return store
}

const api = createApi();
export const storeInstance = createStore(api);