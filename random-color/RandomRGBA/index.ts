function RandomRGBAColor(): string {
    const r:number = Math.floor(Math.random() * 256);
    const g:number = Math.floor(Math.random() * 256);
    const b:number = Math.floor(Math.random() * 256);
    const a:string = (Math.random()).toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default RandomRGBAColor;
