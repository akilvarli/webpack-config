import "./styles/index.scss";

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