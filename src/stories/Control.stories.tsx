import type { Meta, StoryObj } from "@storybook/react";

import Control from "../components/form/FormItem";

const meta: Meta<typeof Control> = {
  title: "Components/Control",
  component: Control,
  tags: ["docsPage"],
  //   argsTypes : {
  //     state
  //   }
  // decorators: [
  //   (story) => (
  //     <DndProvider debugMode={true} backend={HTML5Backend}>
  //       <Provider store={store}>{story()}</Provider>
  //     </DndProvider>
  //   ),
  // ],
};

// meta.decorators = decorators;

export default meta;

type Story = StoryObj<typeof Control>;

export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  //   args: {
  //   },
};
