// listProdutos.js

const produtos = [
    {
        id: 1,
        nome: 'Lava Roupas Concentrado Coco',
        imagem: require('../../assets/roupas_coco.png'),
        descricao: 'O Lava Roupas Líquido Concentrado Oceânico Pontal é a escolha ideal para quem busca eficiência na lavagem e um frescor duradouro nas roupas. Sua fórmula concentrada e de alta performance remove manchas difíceis, preserva as cores e deixa as roupas com um aroma refrescante e revigorante. Perfeito para todos os tipos de tecidos, o Lava Roupas Oceânico Pontal proporciona uma limpeza profunda e cuidadosa, mantendo suas roupas como novas por mais tempo.',
        tipo: 'Lava Roupas',
        beneficios: [
            'Limpeza Eficaz: Remove sujeiras e manchas difíceis, deixando as roupas impecáveis.',
            'Delicadeza: Ideal para roupas de bebês e pessoas com pele sensível, graças à sua fórmula suave.',
            'Aroma Suave: Deixa as roupas com um agradável e delicado perfume de coco.',
            'Alto Rendimento: Fórmula concentrada que rende mais lavagens, proporcionando economia.',
            'Preservação dos Tecidos: Mantém a integridade e a maciez dos tecidos, prolongando a vida útil das roupas.'
        ],
        mododeuso: [
            'Dosagem: Utilize a tampa dosadora para medir a quantidade correta de Lava Roupas Líquido Concentrado de Coco Pontal. Para uma carga de roupas de tamanho médio, utilize 50 ml do produto.',
            'Aplicação: Adicione o produto diretamente no compartimento de detergente da máquina de lavar ou dilua em água antes de adicionar às roupas.',
            'Lavagem: Prossiga com o ciclo de lavagem normalmente. Para manchas mais difíceis, aplique uma pequena quantidade do produto diretamente sobre a mancha, esfregue suavemente e deixe agir por alguns minutos antes de lavar.',
            'Enxágue: Certifique-se de que as roupas sejam bem enxaguadas para remover todos os resíduos do detergente.',
        ]
    },
    {
        id: 2,
        nome: 'Lava Roupas Concentrado Oceânico',
        imagem: require('../../assets/roupas_oceano.png'),
        descricao: 'O Lava Roupas Líquido Concentrado Oceânico Pontal é a escolha ideal para quem busca eficiência na lavagem e um frescor duradouro nas roupas. Sua fórmula concentrada e de alta performance remove manchas difíceis, preserva as cores e deixa as roupas com um aroma refrescante e revigorante. Perfeito para todos os tipos de tecidos, o Lava Roupas Oceânico Pontal proporciona uma limpeza profunda e cuidadosa, mantendo suas roupas como novas por mais tempo.',
        tipo: 'Lava Roupas',
        beneficios: [
            'Alta Performance: Fórmula concentrada que remove manchas difíceis e sujeiras incrustadas.',
            'Frescor Duradouro: Deixa as roupas com um aroma refrescante e revigorante de oceano.',
            'Preservação das Cores: Mantém as cores vivas e brilhantes, evitando o desbotamento.',
            'Cuidado com os Tecidos: Ideal para todos os tipos de tecidos, inclusive os mais delicados.',
            'Economia: Fórmula concentrada que rende mais lavagens, proporcionando economia no uso.'
        ],
        mododeuso: [
            'Dosagem: Utilize a tampa dosadora para medir a quantidade correta de Lava Roupas Líquido Concentrado de Coco Pontal. Para uma carga de roupas de tamanho médio, utilize 50 ml do produto.',
            'Aplicação: Adicione o produto diretamente no compartimento de detergente da máquina de lavar ou dilua em água antes de adicionar às roupas.',
            'Lavagem: Prossiga com o ciclo de lavagem normalmente. Para manchas mais difíceis, aplique uma pequena quantidade do produto diretamente sobre a mancha, esfregue suavemente e deixe agir por alguns minutos antes de lavar.',
            'Enxágue: Certifique-se de que as roupas sejam bem enxaguadas para remover todos os resíduos do detergente.',
        ]
    },
    {
        id: 3,
        nome: 'Lava Roupas em Pó Limpeza Profunda',
        imagem: require('../../assets/po_primavera.png'),
        descricao: 'O Lava Roupas em Pó Pontal é a solução ideal para quem busca eficiência e praticidade na lavagem de roupas. Desenvolvido com uma fórmula poderosa, nosso lava roupas em pó remove as sujeiras mais difíceis, deixando suas roupas limpas e perfumadas. Disponível em sachês práticos e econômicos, o Lava Roupas em Pó Pontal está disponível nas essências Coco, Ação Total e Limpeza Profunda, atendendo a diferentes necessidades e preferências.',
        tipo: 'Lava Roupas',
        beneficios: [
            'Limpeza Eficaz: Remove sujeiras e manchas difíceis, garantindo roupas limpas e frescas.',
            'Fragrâncias Agradáveis: Disponível em diferentes essências para atender a diversas preferências.',
            'Fórmula Avançada: Ingredientes ativos que penetram nas fibras dos tecidos, proporcionando uma limpeza profunda.',
            'Praticidade: Sachês práticos e econômicos, fáceis de armazenar e usar.',
            'Cuidado com os Tecidos: Fórmulas que preservam a integridade dos tecidos, mantendo as roupas macias e com cores vibrantes.'
        ],
        mododeuso: [
            'Dosagem: Utilize a quantidade recomendada de lava roupas em pó conforme indicado na embalagem',
            'Aplicação: Adicione o lava roupas em pó diretamente no compartimento da máquina de lavar ou dilua em água antes de adicionar às roupas.',
            'Lavagem: Selecione o ciclo de lavagem adequado para o tipo de tecido e nível de sujeira.',
            'Enxágue: Enxágue bem as roupas para remover todo o resíduo de sabão.',
            'Secagem: Seque as roupas conforme indicado na etiqueta de cuidados.'
        ]
    },
    {
        id: 4,
        nome: 'Odorizante Sanitário Floral',
        imagem: require('../../assets/odorizante_floral.png'),
        descricao: 'Os odorizantes sanitários Pontal são a solução ideal para manter seu banheiro sempre limpo e perfumado. Com uma fórmula eficaz, nossas pedras sanitárias ajudam a prevenir a formação de manchas e a eliminar odores desagradáveis, proporcionando uma sensação de frescor e limpeza contínua. Disponíveis em diversas fragrâncias, os odorizantes sanitários Pontal garantem um ambiente agradável e higienizado.',
        tipo: 'Limpeza do Banheiro',
        beneficios: [
            'Prevenção de Manchas: Ajuda a prevenir a formação de manchas nas louças sanitárias.',
            'Eliminação de Odores: Neutraliza odores desagradáveis, mantendo o banheiro sempre perfumado.',
            'Frescor Contínuo: Libera fragrância a cada descarga, garantindo frescor contínuo.',
            'Fácil Aplicação: Simples de usar, basta fixar na borda do vaso sanitário.'
        ],
        mododeuso: [
            'Fixação: Retire a pedra sanitária da embalagem e fixe-a na borda do vaso sanitário, onde o fluxo de água é mais intenso.',
            'Substituição: Substitua a pedra sanitária quando ela estiver completamente dissolvida, garantindo a continuidade do frescor e da limpeza.'
        ]
    },
    {
        id: 5,
        nome: 'Lava-Louças Limão 2L',
        imagem: require('../../assets/lavalouca_limao.png'),
        descricao: 'Os detergentes Pontal podem ser usados em diversos tipos de louças e superfícies, como pratos, copos, talheres, panelas, frigideiras, e superfícies da cozinha. Eles são indicados para o uso diário, proporcionando uma limpeza eficaz e um cuidado especial a todas as peças. A fragrância Limão é perfeita para eliminar odores desagradáveis e deixar a cozinha com um aroma vibrante e energizante. Ideal para uso diário, especialmente após cozinhar alimentos com odores fortes.',
        tipo: 'Limpeza da Cozinha',
        beneficios: [
            'Limpeza Eficaz: Fórmula poderosa que remove gorduras e sujeiras difíceis com facilidade.',
            'Suavidade para as Mãos: Desenvolvido com ingredientes suaves, que não agridem a pele.',
            'Perfume Agradável: Fragrâncias exclusivas que deixam sua cozinha com um aroma agradável e duradouro.',
            'Versatilidade: Ideal para a limpeza de louças, talheres, panelas e superfícies da cozinha.',
            'Biodegradável: Fórmula amiga do meio ambiente, que se decompõe facilmente sem causar danos.'
        ],
        mododeuso: [
            'Aplicação: Adicione uma pequena quantidade de detergente Pontal em uma esponja ou diretamente na louça.',
            'Esfregue: Esfregue as louças ou superfícies com a esponja até remover toda a sujeira e gordura.',
            'Enxágue: Enxágue com água corrente até remover todo o detergente.',
            'Secagem: Deixe as louças secarem naturalmente ou seque com um pano limpo.'
        ]
    },
    {
        id: 6,
        nome: 'Esponja Dupla Face',
        imagem: require('../../assets/esponja.png'),
        descricao: 'A Esponja Pontal é um produto essencial para a limpeza diária, oferecendo eficiência e praticidade em diversas tarefas domésticas. Desenvolvida com materiais de alta qualidade, a Esponja Pontal é ideal para a limpeza de louças, superfícies, utensílios de cozinha e muito mais. Sua estrutura dupla face, com um lado macio e outro abrasivo, proporciona uma limpeza completa, removendo sujeiras e manchas difíceis sem danificar as superfícies.',
        tipo: 'Limpeza da Cozinha',
        beneficios: [
            'Dupla Face: Um lado macio para limpeza delicada e outro abrasivo para remoção de sujeiras difíceis.',
            'Alta Durabilidade: Fabricada com materiais de alta qualidade, garantindo uma longa vida útil.',
            'Versatilidade: Ideal para a limpeza de louças, superfícies, utensílios de cozinha, banheiros e outras áreas da casa.',
            'Eficiência: Remove sujeiras e manchas difíceis com facilidade, proporcionando uma limpeza completa.',
            'Ergonomia: Design que se adapta confortavelmente à mão, facilitando o uso diário.'
        ],
        mododeuso: [
            'Preparação: Umedeça a esponja com água antes de usar.',
            'Aplicação de Detergente: Aplique uma pequena quantidade de detergente ou produto de limpeza na esponja.',
            'Limpeza: Utilize o lado macio para superfícies delicadas e o lado abrasivo para remover sujeiras e manchas difíceis.',
            'Enxágue: Após a limpeza, enxágue a esponja com água corrente para remover resíduos de sujeira e detergente.',
            'Armazenamento: Deixe a esponja secar em local arejado para evitar a proliferação de bactérias.'
        ]
    }
    // Adicione mais produtos conforme necessário
];

export default produtos;
