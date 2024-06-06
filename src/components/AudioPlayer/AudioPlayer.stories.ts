import { Player } from "./AudioPlayer"
import "./styles.css"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta = {
    title: "components/Player",
    component: Player,
}

export default meta;

export const Base: StoryObj = {
    args: {
        
    }
}