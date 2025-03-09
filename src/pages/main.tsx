export default function Main() {
    return <>{process.env.NEXT_PUBLIC_PRIVATE_KEY || 'здесь ничего нет...'}</>
}
