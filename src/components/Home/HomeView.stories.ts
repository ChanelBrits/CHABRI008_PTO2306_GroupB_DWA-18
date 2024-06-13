import { HomeView } from "./HomeView"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta = {
    title: "components/HomeView",
    component: HomeView,
}

export default meta;


const defaultList = [
    {
      id: 1,
      title: 'Example Show',
      description: 'An example show description',
      seasons: 3,
      updated: new Date().toISOString(),
      image: 'https://via.placeholder.com/150',
      genres: [3, 5],
    },
    {
        id: 1,
        title: 'Example Show',
        description: 'An example show description',
        seasons: 3,
        updated: new Date().toISOString(),
        image: 'https://via.placeholder.com/150',
        genres: [3, 5],
      },
      {
        id: 1,
        title: 'Example Show',
        description: 'An example show description',
        seasons: 3,
        updated: new Date().toISOString(),
        image: 'https://via.placeholder.com/150',
        genres: [3, 5],
      },
      {
        id: 1,
        title: 'Example Show',
        description: 'An example show description',
        seasons: 3,
        updated: new Date().toISOString(),
        image: 'https://via.placeholder.com/150',
        genres: [3, 5],
      },
      {
          id: 1,
          title: 'Example Show',
          description: 'An example show description',
          seasons: 3,
          updated: new Date().toISOString(),
          image: 'https://via.placeholder.com/150',
          genres: [3, 5],
        },
        {
          id: 1,
          title: 'Example Show',
          description: 'An example show description',
          seasons: 3,
          updated: new Date().toISOString(),
          image: 'https://via.placeholder.com/150',
          genres: [3, 5],
        },
  ];

export const Base: StoryObj = {
    args: {
        phase: "LISTING",
        list: defaultList,
    }
}

// export const Loading: StoryObj<typeof HomeView> = {
//     args: {
//       phase: 'LOADING',
//       list: defaultList.map(show => ({ ...show, loading: true })),
//     },
//   }
