import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <title>Ступени мастерства</title>
                <link rel="icon" href="steps/favicon.ico" />
                <link rel="manifest" href="steps/app.webmanifest" />
                <link rel="apple-touch-icon" href="steps/ios.png" />
            </head>
            <body>{children}</body>
        </html>
    )
}
