import type { Meta, StoryObj } from "@storybook/react";
import App from "./app";
import { http, HttpResponse } from "msw";

const meta: Meta<typeof App> = {
  title: "Example/App",
  component: App,
};
export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  parameters: {
    msw: [
      http.get("https://jsonplaceholder.typicode.com/posts/1", async () => {
        return HttpResponse.json({
          title: "Storybook Mock Title",
          body: "This is the Storybook mock body by yonglin.",
        });
      }),
    ],
  },
};
