import { Show } from "./Show"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta = {
    title: "components/Show",
    component: Show,
}

export default meta;

const defaultList = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Example Show',
      seasons: 3,
      dateAdded: new Date(),
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Example Show',
        seasons: 3,
        dateAdded: new Date(),
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Example Show',
        seasons: 3,
        dateAdded: new Date(),
      },
  ];

export const Base: StoryObj = {
    args: {
        phase: "LISTING",
        list: defaultList
    }
}

export const Loading: StoryObj = {
    args: {
      phase: 'LOADING',
      list: defaultList.map(show => ({ ...show})),
  }
}
