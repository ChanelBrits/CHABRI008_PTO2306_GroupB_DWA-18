import { createStore as createZustandStore, StoreApi } from "zustand";
// import { createStore } from "zustand";
import { Api, createApi } from "../../components/api/createApi.ts"
import { Preview, Show } from "../../types.ts"

export type Store = {
    phase: "LISTING" | "LOADING" | "ERROR";
    list: Preview[];
    showPhase: "LOADING" | "LOADED" | "ERROR" 
    show: Show | null;
    fetchShowData: (id: string) => void
}

const createTypedStore = createZustandStore<Store>();

export const createStore = (api: Api): StoreApi<Store> => {
  const store = createTypedStore (() => ({
    phase: "LOADING",
    list: [],
    showPhase: "LOADING",
    show: null,
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
    }
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