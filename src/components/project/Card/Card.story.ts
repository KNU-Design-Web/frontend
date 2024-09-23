import { ProjectCard } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/Card",
    component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 1,
        author: "홍길동",
        title: "프로젝트 명",
        imgSrc: "https://placehold.co/320x320",
    },
};
