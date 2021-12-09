import "../styles/index.scss";
import React from 'react'
import Recipes from "./Recipes";

const App = () => {
    return (
        <>
        <section className="hero">
            <main>
                <section>
                    <h1> Oh hai, React</h1>
                </section>
            </main>
            <Recipes/>
        </section>
        </>
    )
}

export default App
