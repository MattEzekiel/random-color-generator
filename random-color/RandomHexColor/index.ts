function RandomHexColor(): string {
    const hex:string = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

export default RandomHexColor;
