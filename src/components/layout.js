import React from "react"

export const Layout = ({children}) => (
    <div>
        <header><h1>Our site title</h1></header>
        <main>{children}</main>
        <footer><p>A fun footer</p></footer>
    </div>
)

export default Layout