import { Carousel } from "./Carousel"
import { Meta, StoryObj } from "@storybook/react"

const defaultCardsData = [
    <div key='1' style={{ backgroundColor: 'red', height: '12rem', width: '10rem' }}>Card 1</div>,
    <div key='2' style={{ backgroundColor: 'blue', height: '12rem', width: '10rem' }}>Card 2</div>,
    <div key='3' style={{ backgroundColor: 'green', height: '12rem', width: '10rem' }}>Card 3</div>,
    <div key='4' style={{ backgroundColor: 'yellow', height: '12rem', width: '10rem' }}>Card 4</div>,
    <div key='5' style={{ backgroundColor: 'purple', height: '12rem', width: '10rem' }}>Card 5</div>,
    <div key='6' style={{ backgroundColor: 'orange', height: '12rem', width: '10rem' }}>Card 6</div>,
  ];

const meta:Meta = {
    title: "components/Carousel",
    component: Carousel,
}

export default meta;

export const Base: StoryObj = {
    args: {
        title: 'Sample Carousel',
        cardsData: defaultCardsData
    }
}