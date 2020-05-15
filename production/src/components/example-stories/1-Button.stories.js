import React from "react"
import { action } from "@storybook/addon-actions"
import { Button } from "@storybook/react/demo"
import { FaBeer } from "react-icons/fa"

export default {
  title: "Button",
  component: Button,
}

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <FaBeer />
  </Button>
)

export const Beer = () => (
  <Button onClick={action("clicked")}>
    <FaBeer color="#b000b5" size="3em" />
  </Button>
)
