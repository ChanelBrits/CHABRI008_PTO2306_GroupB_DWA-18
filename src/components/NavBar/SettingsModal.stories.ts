import { SettingsModal } from "./SettingsModal"
import { Meta, StoryObj } from "@storybook/react"

const meta:Meta<typeof SettingsModal> = {
    title: "components/SettingsModal",
    component: SettingsModal,
}

export default meta;

const dummyElement = document.createElement('div');

export const Base: StoryObj<typeof SettingsModal> = {
    args: {
        anchorEl: dummyElement,
        setAnchorEl: () => {},
        open: true,
    }
}