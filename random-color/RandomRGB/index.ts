function RandomRGBColor(): string {
    const r:number = Math.floor(Math.random() * 256);
    const g:number = Math.floor(Math.random() * 256);
    const b:number = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

export default RandomRGBColor;
