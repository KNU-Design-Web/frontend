import { animate } from "./animation/index.js";
import { Grid } from "./components/Grid.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rows = 20;
const cols = 20;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

const grid = new Grid(rows, cols, cellWidth, cellHeight);

const mouse = { x: -1, y: -1 };

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

canvas.addEventListener("mouseleave", () => {
    mouse.x = -1;
    mouse.y = -1;
});

animate(ctx, grid, mouse, canvas);
