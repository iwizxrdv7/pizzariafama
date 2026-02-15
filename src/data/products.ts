export interface ProductOption {
    id: string;
    name: string;
    priceCheck?: boolean; // If true, adds to price (not used for this specific filter but good for type)
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string; // Path relative to public (e.g., "sabores/calabresa.png")
    category: string;
    link: string; // Payment link V3
    isCombo?: boolean;
    allowSodaFilter?: boolean; // For the Coke/Guarana/Pepsi filter
    stock?: number;
    options?: ProductOptionGroup[];
}

export interface ProductOptionGroup {
    id: string;
    title: string;
    description?: string;
    min: number;
    max: number;
    required: boolean;
    options: ProductOptionItem[];
}

export interface ProductOptionItem {
    id: string;
    name: string;
    price?: number;
    image?: string;
}

export const products: Product[] = [
    // COMBOS
    {
        id: "famaindividual",
        name: "Combo Fama Individual",
        description: "1 Pizza Broto Tradicional + 1 Esfiha Doce + Refrigerante 350ml",
        price: 49.90,
        originalPrice: 59.90,
        image: "sabores/individual.jpg",
        category: "Combos",
        link: "https://pedido.famapizzaria.site/pay/f7ce0774-9270-480b-b2bb-4f043bb514ef",
        isCombo: true,
        allowSodaFilter: true,
        options: [
            {
                id: "sabores",
                title: "Escolha Seu Sabor:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "calabresa", name: "Calabresa", price: 0 },
                    { id: "quatroqueijos", name: "Quatro Queijos", price: 0 },
                    { id: "bacon", name: "Bacon", price: 0 },
                    { id: "portuguesa", name: "Portuguesa", price: 0 },
                    { id: "frangocomcatupiry", name: "Frango com Catupiry", price: 0 },
                    { id: "calabresacomcheddar", name: "Calabresa com Cheddar", price: 0 },
                    { id: "modadacasa", name: "Moda da Casa", price: 0 },
                    { id: "milhoverde", name: "Milho Verde", price: 0 },
                    { id: "calabresaemdobro", name: "Calabresa em Dobro", price: 0 },
                    { id: "churrasquinha", name: "Churrasquinha", price: 0 },
                    { id: "strogonoffdecarne", name: "Strogonoff de Carne", price: 0 },
                    { id: "strogonoffdefrango", name: "Strogonoff de Frango", price: 0 },
                    { id: "lombinho", name: "Lombinho", price: 0 }
                ]
            },
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            },
            {
                id: "refrigerantes",
                title: "Refrigerantes: (Lata 350 ml)",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "coca-cola", name: "Coca-Cola", price: 0 },
                    { id: "guarana", name: "Guaraná", price: 0 },
                    { id: "pepsi", name: "Pepsi", price: 0 }
                ]
            },
            {
                id: "esfiha-doce",
                title: "Esfiha Doce:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "brigadeiro", name: "Brigadeiro", price: 0 },
                    { id: "nutella-morango", name: "Nutella com Morango", price: 0 },
                    { id: "banana-canela", name: "Banana com Canela", price: 0 },
                    { id: "mms", name: "M&Ms", price: 0 } // Fixed M&M's usage
                ]
            }
        ]
    },
    {
        id: "famacasal",
        name: "Combo Fama Casal",
        description: "1 Pizza Grande + 1 Pizza Doce Media + 1 Refrigerante 1L",
        price: 69.90,
        originalPrice: 84.90,
        image: "sabores/casal.jpg",
        category: "Combos",
        link: "https://pedido.famapizzaria.site/pay/03bad5bc-1839-46c9-b985-759d709d1579",
        isCombo: true,
        allowSodaFilter: true,
        options: [
            {
                id: "sabores",
                title: "Sabor:",
                description: "Escolha até 4 opções",
                min: 1,
                max: 4,
                required: true,
                options: [
                    { id: "calabresa", name: "Calabresa", price: 0 },
                    { id: "quatroqueijos", name: "Quatro Queijos", price: 0 },
                    { id: "bacon", name: "Bacon", price: 0 },
                    { id: "portuguesa", name: "Portuguesa", price: 0 },
                    { id: "frangocomcatupiry", name: "Frango com Catupiry", price: 0 },
                    { id: "calabresacomcheddar", name: "Calabresa com Cheddar", price: 0 },
                    { id: "modadacasa", name: "Moda da Casa", price: 0 },
                    { id: "milhoverde", name: "Milho Verde", price: 0 },
                    { id: "calabresaemdobro", name: "Calabresa em Dobro", price: 0 },
                    { id: "churrasquinha", name: "Churrasquinha", price: 0 },
                    { id: "strogonoffdecarne", name: "Strogonoff de Carne", price: 0 },
                    { id: "strogonoffdefrango", name: "Strogonoff de Frango", price: 0 },
                    { id: "lombinho", name: "Lombinho", price: 0 }
                ]
            },
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            },
            {
                id: "refrigerantes",
                title: "Refrigerantes: (Garrafa 1L)",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "coca-cola", name: "Coca-Cola", price: 0 },
                    { id: "guarana", name: "Guaraná", price: 0 },
                    { id: "pepsi", name: "Pepsi", price: 0 }
                ]
            },
            {
                id: "pizza-doce",
                title: "Pizza Doce: (média)",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "brigadeiro", name: "Brigadeiro", price: 0 },
                    { id: "morango-nutella", name: "Morango com Nutella", price: 0 },
                    { id: "beijinho", name: "Beijinho", price: 0 },
                    { id: "romeu-julieta", name: "Romeu e Julieta", price: 0 },
                    { id: "mms", name: "M&M`s", price: 0 },
                    { id: "banana-canela", name: "Banana com Canela", price: 0 },
                    { id: "prestigio", name: "Prestigio", price: 0 }
                ]
            }
        ]
    },
    {
        id: "famafamilia",
        name: "Combo Fama Família",
        description: "2 Pizzas Grandes Tradicionais + Refrigerante 2L + Pizza Média Doce!",
        price: 89.90,
        originalPrice: 119.90,
        image: "sabores/familia.webp",
        category: "Combos",
        link: "https://pedido.famapizzaria.site/pay/9f4609ac-c6c8-4bbc-9597-c9ea7c227996",
        isCombo: true,
        allowSodaFilter: true,
        stock: 8,
        options: [
            {
                id: "sabores-1",
                title: "Escolha o sabor da 1ª Pizza Grande:",
                description: "Escolha até 4 opções",
                min: 1,
                max: 4,
                required: true,
                options: [
                    { id: "calabresa", name: "Calabresa", price: 0 },
                    { id: "quatroqueijos", name: "Quatro Queijos", price: 0 },
                    { id: "bacon", name: "Bacon", price: 0 },
                    { id: "portuguesa", name: "Portuguesa", price: 0 },
                    { id: "frangocomcatupiry", name: "Frango com Catupiry", price: 0 },
                    { id: "calabresacomcheddar", name: "Calabresa com Cheddar", price: 0 },
                    { id: "modadacasa", name: "Moda da Casa", price: 0 },
                    { id: "milhoverde", name: "Milho Verde", price: 0 },
                    { id: "calabresaemdobro", name: "Calabresa em Dobro", price: 0 },
                    { id: "churrasquinha", name: "Churrasquinha", price: 0 },
                    { id: "strogonoffdecarne", name: "Strogonoff de Carne", price: 0 },
                    { id: "strogonoffdefrango", name: "Strogonoff de Frango", price: 0 },
                    { id: "lombinho", name: "Lombinho", price: 0 }
                ]
            },
            {
                id: "sabores-2",
                title: "Escolha o sabor da 2ª Pizza Grande:",
                description: "Escolha até 4 opções",
                min: 1,
                max: 4,
                required: true,
                options: [
                    { id: "calabresa", name: "Calabresa", price: 0 },
                    { id: "quatroqueijos", name: "Quatro Queijos", price: 0 },
                    { id: "bacon", name: "Bacon", price: 0 },
                    { id: "portuguesa", name: "Portuguesa", price: 0 },
                    { id: "frangocomcatupiry", name: "Frango com Catupiry", price: 0 },
                    { id: "calabresacomcheddar", name: "Calabresa com Cheddar", price: 0 },
                    { id: "modadacasa", name: "Moda da Casa", price: 0 },
                    { id: "milhoverde", name: "Milho Verde", price: 0 },
                    { id: "calabresaemdobro", name: "Calabresa em Dobro", price: 0 },
                    { id: "churrasquinha", name: "Churrasquinha", price: 0 },
                    { id: "strogonoffdecarne", name: "Strogonoff de Carne", price: 0 },
                    { id: "strogonoffdefrango", name: "Strogonoff de Frango", price: 0 },
                    { id: "lombinho", name: "Lombinho", price: 0 }
                ]
            },
            {
                id: "borda-1",
                title: "Escolha a borda da 1ª Pizza Grande:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            },
            {
                id: "borda-2",
                title: "Escolha a borda da 2ª Pizza Grande:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            },
            {
                id: "refrigerantes",
                title: "Refrigerantes: (Garrafa 2 Litros)",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "coca-cola", name: "Coca-Cola", price: 0 },
                    { id: "guarana", name: "Guaraná", price: 0 },
                    { id: "pepsi", name: "Pepsi", price: 0 }
                ]
            },
            {
                id: "pizza-doce",
                title: "Pizza Doce: (média)",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "brigadeiro", name: "Brigadeiro", price: 0 },
                    { id: "morango-nutella", name: "Morango com Nutella", price: 0 },
                    { id: "beijinho", name: "Beijinho", price: 0 },
                    { id: "romeu-julieta", name: "Romeu e Julieta", price: 0 },
                    { id: "mms", name: "M&M`s", price: 0 },
                    { id: "banana-canela", name: "Banana com Canela", price: 0 },
                    { id: "prestigio", name: "Prestigio", price: 0 }
                ]
            }
        ]
    },

    // PIZZAS SALGADAS (Pizzas Artesanais Prontas)
    {
        id: "calabresa",
        name: "Pizza Sabor Calabresa",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/calabresa.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/18b0bc4e-077d-4be8-a80c-7148ca4ea054",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "quatroqueijos",
        name: "Pizza Sabor Quatro Queijos",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/quatroqueijos.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/5875ed5a-504b-4f51-b01f-4734985f60f2",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "bacon",
        name: "Pizza Sabor Bacon",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/bacon.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/daa9b5ec-ea44-4cf4-ba73-9d215510a3d1",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "portuguesa",
        name: "Pizza Sabor Portuguesa",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/portuguesa.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/0f7ba376-4ba7-4b49-a131-d5ba34e9f94f",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "frangocomcatupiry",
        name: "Pizza Sabor Frango com Catupiry",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/frangocomcatupiry.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/543dea8c-8ec7-4e4d-a288-34d82fe8990c",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "calabresacomcheddar",
        name: "Pizza Sabor Calabresa com Cheddar",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/calabresacomcheddar.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/ed4d8ad7-e9ca-4072-9e30-dc0857fd4b46",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "modadacasa",
        name: "Pizza Sabor Moda da Casa",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/modadacasa.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/f393b739-9be8-4ffe-8581-d5b5b488c93e",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "milhoverde",
        name: "Pizza Sabor Milho Verde",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/milhoverde.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/7b0c258f-14a1-4201-affe-8d720dfc6aaf",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "calabresaemdobro",
        name: "Pizza Sabor Calabresa em Dobro",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/calabresaemdobro.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/1b347088-5b5c-41ba-8440-b719b5271c1f",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "churrasquimha",
        name: "Pizza Sabor Churrasquinha",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/churrasquinha.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/d0ccb029-e785-45ee-8776-f4091f237ff6",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "strogonoffdecarne",
        name: "Pizza Sabor Strogonoff de Carne",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/strogonoffdecarne.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/25d8e904-49cc-4a0d-b7bd-5469db6cdcd5",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "strogonoffdefrango",
        name: "Pizza Sabor Strogonoff de Frango",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/strogonoffdefrango.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/a393ff39-083a-4a94-81a8-2b58835c8b12",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    },
    {
        id: "lombinho",
        name: "Pizza Sabor Lombinho",
        description: "+ Borda Recheada Grátis",
        price: 29.90,
        image: "sabores/lombinho.png",
        category: "Pizzas",
        link: "https://pedido.famapizzaria.site/pay/d95cc978-eb84-4c9b-b190-883aa3d4787b",
        options: [
            {
                id: "bordas",
                title: "Bordas:",
                description: "Escolha 1 opção",
                min: 1,
                max: 1,
                required: true,
                options: [
                    { id: "borda-requeijao", name: "Borda de Requeijão", price: 0 },
                    { id: "borda-sem-recheio", name: "Borda sem Recheio", price: 0 },
                    { id: "borda-cheddar", name: "Borda Cheddar", price: 0 },
                    { id: "borda-mussarela", name: "Borda Mussarela", price: 0 },
                    { id: "borda-catupiry", name: "Borda Catupiry Original", price: 0 }
                ]
            }
        ]
    }
];

export const reviews = [
    {
        name: "Cinthia",
        rating: 5,
        text: "Surpreendentemente gostoso.",
        image: "images/r1.jpg"
    },
    {
        name: "Luiza",
        rating: 5,
        text: "A Pizza estava maravilhosa, bem sequinha, perfeita, com um molho gostoso, não deixe de experimentar... Pedirei mais vezes",
        image: "images/r3.jpg"
    },
    {
        name: "Ronald",
        rating: 5,
        text: "Quando vi o preço achei q ia ser pequena, mas me enganei! a qualidade é absurda.",
        image: "images/r4.jpg"
    },
    {
        name: "Carlla",
        rating: 5,
        text: "Pizza fresquinha, saborosa, chegou rapidamente e estava quentinha!",
        image: "images/r5.jpg"
    },
    {
        name: "Gregory",
        rating: 5,
        text: "Uma delícia como sempre a comida, parabéns para o pessoal da cozinha.",
        image: "images/r6.jpg"
    },
    {
        name: "Jussara",
        rating: 5,
        text: "Bom, barato e entrega rápida. Não tem erro, semana que vem peço de novo",
        image: "images/r7.jpg"
    }
];
