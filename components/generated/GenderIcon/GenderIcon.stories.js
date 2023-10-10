import { GenderIcon } from ".";

export default {
  title: "Components/GenderIcon",
  component: GenderIcon,
  argTypes: {
    gender: {
      options: ["male", "female"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    gender: "male",
  },
};
