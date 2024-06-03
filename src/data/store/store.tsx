import { createStore as createZustandStore, StoreApi } from "zustand";
// import { createStore } from "zustand";
import { Api } from "../../components/api/createApi.ts"
import { Preview } from "../../types.ts"

export type Store = {
    phase: "LISTING" | "LOADING" | "ERROR";
    list: Preview[];
}

const createTypedStore = createZustandStore<Store>();

export const createStore = (api: Api): StoreApi<Store> => {
  const store = createTypedStore (() => ({
    phase: "LOADING",
    list: [],
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

// const useStore = create<Store>((set) => ({
//   phase: "LOADING",
//   list: [],
//   fetchPreviewData: async () => {
//     set({ phase: "LOADING" });
//     try {
//       const api = createApi();
//       const data = await api.getPreviewData();
//       set({ phase: "LISTING", list: data });
//     } catch (error) {
//       set({ phase: "ERROR" });
//       console.error('Error fetching data:', error);
//     }
//   }
// }));

// export default useStore;