function RandomHSLColor(): string {
    const h:number = Math.floor(Math.random() * 361);
    const s:number = Math.floor(Math.random() * 101);
    const l:number = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

export default RandomHSLColor;
