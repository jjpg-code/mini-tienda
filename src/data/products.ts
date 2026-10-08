export type Product = {
    id: string
    name: string
    price: number
    category: 'fruta' | 'lácteos' | 'panadería'
    description: string
}

export const products: Product[] = [
    {
        id: 'p1',
        name: 'Manzanas Golden',
        price: 2.49,
        category: 'fruta',
        description: 'Bolsa de 1 kg.',
    },
    {
        id: 'p2',
        name: 'Plátanos de Canarias',
        price: 1.99,
        category: 'fruta',
        description: 'Racimo aprox. 1 kg.',
    },
    {
        id: 'p3',
        name: 'Leche entera',
        price: 0.95,
        category: 'lácteos',
        description: 'Brik de 1 litro.',
    },
    {
        id: 'p4',
        name: 'Yogur natural',
        price: 1.8,
        category: 'lácteos',
        description: 'Pack de 4 unidades.',
    },
    {
        id: 'p5',
        name: 'Pan de pueblo',
        price: 1.5,
        category: 'panadería',
        description: 'Hogaza de 500 g.',
    },
    {
        id: 'p6',
        name: 'Croissants',
        price: 2.2,
        category: 'panadería',
        description: 'Pack de 4.',
    },
]
