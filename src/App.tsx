import { useEffect, useState } from 'react'
import { createApi, Api } from './components/api/createApi'
import { NavBar } from './components/NavBar/NavBar'
import { Show } from './components/Home/Show'
import { Carousel } from './components/Home/Carousel'


export const App = () => {
  // const api:Api = createApi();
  // const [previewData, setPreviewData ] = useState();

  // useEffect(() => {
  //   api.getPreviewData()
  //   .then(response => {
  //     if ('data' in response) {
  //       setPreviewData(response.data);
  //   }
  // })
  // }, [])
  // console.log(previewData)

  return (
  <div>
    <NavBar></NavBar>
    <Show></Show>
    <Carousel></Carousel>
  </div>
  )
}