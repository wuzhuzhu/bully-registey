import { IconButtonDark } from ".";

export default {
  title: "Components/IconButtonDark",
  component: IconButtonDark,
  argTypes: {
    style: {
      options: ["filled", "outlined", "tonal", "standard"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "focused", "pressed", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "filled",
    stateProp: "enabled",
  },
};
