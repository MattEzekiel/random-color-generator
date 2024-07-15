function RandomRGBPercentColor(): string {
    const r:number = Math.floor(Math.random() * 101);
    const g:number = Math.floor(Math.random() * 101);
    const b:number = Math.floor(Math.random() * 101);
    return `rgb(${r}%, ${g}%, ${b}%)`;
}

export default RandomRGBPercentColor;
