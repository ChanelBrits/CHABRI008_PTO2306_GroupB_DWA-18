import { MainContent } from "./MainContent"
import { NavBar } from "../NavBar/NavBar"
// import { useEffect, useState } from 'react'
// import { createApi, Api, Preview } from '../api/createApi'
import { Preview } from "../../types.ts"
import { Store } from "../../data/store/store.tsx"

export const HomePage = ({phase, list}: Store) => {

    // const api:Api = createApi();
    // const [previewData, setPreviewData ] = useState<Preview[]>([]);


    // useEffect(() => {
    //     api.getPreviewData()
    //     .then(response => {
    //     setPreviewData(response);
    // })
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });
    // }, [])
    // console.log(previewData)

    return (
        <>
            <NavBar/>
            <MainContent
                phase={phase}
                list={list}
            ></MainContent>
        </>
    )
}