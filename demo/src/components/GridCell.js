export class GridCell {
    constructor() {
        this.isHovered = false;
        this.opacity = 0;
    }

    update(isHovered) {
        if (isHovered) {
            this.isHovered = true;
            this.opacity = 1;
        } else {
            if (this.opacity > 0) {
                this.opacity -= 0.02;
                this.opacity = Math.max(this.opacity, 0);
            }
            this.isHovered = false;
        }
    }
}
