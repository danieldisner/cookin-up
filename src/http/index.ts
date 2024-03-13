import type ICategory from "@/interfaces/ICategory";

export async function getCategories(): Promise<ICategory[]> {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');
    const categoriesData: any[] = await response.json();

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

await new Promise((resolver) => {
    setTimeout(resolver, 3000);
});