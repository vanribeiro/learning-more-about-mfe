import ICategory from "../interfaces/category";

const categories: Array<ICategory> = [
    {
        id: 1,
        name: 'Acessórios',
        style: {
            backgroundColor: 'green',
            color: 'white',
        }
    },
    {
        id: 2,
        name: 'Notebooks',
        style: {
            backgroundColor: '#ffce39',
        }
    },
    {
        id: 3,
        name: 'Impressoras',
        style: {
            backgroundColor: '#1a1a1a',
            color: 'white',
        }
    },
    {
        id: 4,
        name: 'Celulares e Tabletes',
        style: {
            backgroundColor: 'purple',
            color: 'white',
        }
    },
    {
        id: 5,
        name: 'Monitores',
        style: {
            backgroundColor: '#58b7c9',
        }
    },
    {
        id: 6,
        name: 'Memória e Armazenamento de Dados',
        style: {
            backgroundColor: '#b40202',
            color: 'white',
        }
    }
];

export default categories;