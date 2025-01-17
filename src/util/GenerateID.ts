export default function generateID(name: string) {
    return `${name}:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}