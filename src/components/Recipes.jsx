import { useState } from "react";

const elvenShieldRecipe = {
    leatherStripes: 2,
    ironIngots: 1,
    refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refineMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

import React from 'react'

const Recipes = () => {

    const [recipe, setRecipe] = useState([]);

    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gaunlent Recipe</button>

            <ul>
                {Object.keys(recipe).map(material => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default Recipes
