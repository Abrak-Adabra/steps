import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <title>Ступени мастерства</title>
                <link rel="manifest" href="app.webmanifest" />
                <link rel="apple-touch-icon" href="ios.png" />
                <link rel="icon" href="favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    )
}
