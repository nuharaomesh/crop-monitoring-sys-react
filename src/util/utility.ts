export default function utility(name: string) {
    return `${name}:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function base64ToFile(byteCharacters, fileName, mimeType) {
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    
    return new File([blob], fileName, { type: mimeType });
}