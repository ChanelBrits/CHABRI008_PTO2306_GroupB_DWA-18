const previewUrl = 'https://podcast-api.netlify.app/shows'

export type Api = {
    getPreviewData: () => Promise<
      {
        id: number;
        title: string;
        description: string;
        seasons: number;
        image: string;
        genres: number[];
        updated: string;
      } 
      | Error>
  }

const getPreviewData = () => {
    const result = fetch(previewUrl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong. Please try again')
        }
        return response;
       })
    .then((response) => response.json())
    .then(data => {
       return { data }
    })
    .catch((error) => {
        return error
    })

    return result;
}

export const createApi = (): Api => {
    return {
      getPreviewData,
    }
  }