import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";


async function getUrlData<T>(url: string) {
    const response = await fetch(url);
    return response.json() as T;
}

export async function getCategories(): Promise<ICategory[]> {
    const categoriesData: ICategory[] = await getUrlData<ICategory[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/86802bed06855cdccc9247dd1fa175c6ccea7dda/categorias.json');
    const categories: ICategory[] = categoriesData.map(category => ({
        nome: category.nome,
        ingredientes: category.ingredientes,
        imagem: category.imagem,
        name: category.nome,
        ingredients: category.ingredientes,
        image: category.imagem
    }));
    return categories;
}

export async function getRecipes() {
    const recipesData: IRecipe[] = await getUrlData<IRecipe[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json');
    const recipes: IRecipe[] = recipesData.map(recipe => ({
        nome: recipe.nome,
        ingredientes: recipe.ingredientes,
        imagem: recipe.imagem,
        name: recipe.nome,
        ingredients: recipe.ingredientes,
        image: recipe.imagem
    }));
    return recipes;
}