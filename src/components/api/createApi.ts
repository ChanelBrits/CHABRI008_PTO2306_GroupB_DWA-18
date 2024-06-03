import { Preview }  from "../../types"

const previewUrl = 'https://podcast-api.netlify.app/shows'

export type Api = {
    getPreviewData: () => Promise<Preview[]>
  }

const getPreviewData: Api['getPreviewData'] = () => {
    return fetch(previewUrl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong. Please try again')
        }
        return response;
       })
    .then((response) => response.json())
    .then(data => {
      if (!Array.isArray(data)){
        throw new Error ('Invalid data format received')
      }
       return data as Preview[]
    })
    .catch((error) => {
      console.error('Error fetching data', error)
        throw error
    })
}

export const createApi = (): Api => {
    return {
      getPreviewData,
    }
  }