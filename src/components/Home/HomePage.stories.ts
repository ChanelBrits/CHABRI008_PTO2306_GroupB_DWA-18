import { HomePage } from "./HomePage"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta = {
    title: "components/HomePage",
    component: HomePage,
}

export default meta;

const mockList = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];

export const Base: StoryObj = {
    args: {
        phase: "LISTING",
        list: mockList
    }
}