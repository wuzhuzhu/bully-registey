import { SearchBarDark } from ".";

export default {
  title: "Components/SearchBarDark",
  component: SearchBarDark,
  argTypes: {
    stateProp: {
      options: ["hovered", "pressed", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    show1StTrailingIcon: true,
    placeholderText: "Hinted search text",
    show2NdTrailingIcon: false,
    stateProp: "hovered",
    showAvatar: true,
    className: {},
    userImagesUserText: "A",
  },
};
