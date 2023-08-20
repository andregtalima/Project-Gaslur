import './global.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="image/favicon.png" type="image/x-icon" />
          <title>Gaslur</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }