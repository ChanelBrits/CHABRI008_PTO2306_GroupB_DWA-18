import { Landing } from "./Landing"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof Landing> = {
    title: "components/Landing",
    component: Landing,
}

export default meta;

export const Base: StoryObj<typeof Landing> = {
    args: {
    
    }
}