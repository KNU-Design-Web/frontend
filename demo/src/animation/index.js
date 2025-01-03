export function animate(ctx, grid, mouse, canvas) {
    const cellWidth = canvas.width / grid.cols;
    const cellHeight = canvas.height / grid.rows;

    function animationLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let hoveredRow = -1;
        let hoveredCol = -1;
        if (mouse.x >= 0 && mouse.y >= 0) {
            hoveredCol = Math.floor(mouse.x / cellWidth);
            hoveredRow = Math.floor(mouse.y / cellHeight);
        }

        grid.updateHoveredCell(hoveredRow, hoveredCol);
        grid.draw(ctx);
        requestAnimationFrame(animationLoop);
    }

    animationLoop();
}
