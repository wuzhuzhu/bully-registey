import { GenderedCardDark } from ".";

export default {
  title: "Components/GenderedCardDark",
  component: GenderedCardDark,
  argTypes: {
    style: {
      options: ["filled", "outlined", "elevated"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "filled",
    text: "Header",
    subheadClassName: {},
    text1: "Subhead",
    mediaClassName: {},
    genderIconGender: "male",
  },
};
