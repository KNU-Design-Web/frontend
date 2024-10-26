import { Banner } from "./Banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Layouts/Banner",
    component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
