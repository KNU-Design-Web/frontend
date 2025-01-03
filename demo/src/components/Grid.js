import { GridCell } from "./GridCell.js";

export class Grid {
    constructor(rows, cols, cellWidth, cellHeight) {
        this.rows = rows;
        this.cols = cols;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let row = 0; row < this.rows; row++) {
            const rowCells = [];
            for (let col = 0; col < this.cols; col++) {
                rowCells.push(new GridCell());
            }
            grid.push(rowCells);
        }
        return grid;
    }

    updateHoveredCell(hoveredRow, hoveredCol) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const isHovered = row === hoveredRow && col === hoveredCol;
                this.grid[row][col].update(isHovered);
            }
        }
    }

    draw(ctx) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = this.grid[row][col];
                const x = col * this.cellWidth;
                const y = row * this.cellHeight;

                if (cell.opacity <= 0) continue;

                ctx.fillStyle = `rgba(187, 255, 0, ${cell.opacity})`;
                ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
            }
        }
    }
}
