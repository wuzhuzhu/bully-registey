import { FamilyAvatar } from ".";

export default {
  title: "Components/FamilyAvatar",
  component: FamilyAvatar,
  argTypes: {
    state: {
      options: ["default"],
      control: { type: "select" },
    },
    generation: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    isMale: true,
    state: "default",
    generation: "two",
    isMale1: true,
    className: {},
    ellipse: "/img/ellipse-1-11.svg",
    img: "/img/ellipse-1-10.svg",
  },
};
