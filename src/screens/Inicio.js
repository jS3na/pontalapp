import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

// Dados de exemplo dos produtos
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
}
];

export default function Inicio() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToDetalhes(item)}>
      <View style={styles.itemInnerContainer}>
        <Image source={item.imagem} style={styles.itemImage} resizeMode="cover" />
        <Text style={styles.itemText}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToDetalhes = (produto) => {
    navigation.navigate('ProdutoDetalhes', { produto });
  };

  const navigateToProdutos = () => {
    navigation.navigate('Produtos');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          autoplay={true}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          <View style={styles.slide}>
            <Image
              source={require('../../assets/pontal_banner.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/novidade_1.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/novidade_2.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.sectionContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Os queridinhos</Text>
          <TouchableOpacity
            style={styles.verTodosButton}
            onPress={navigateToProdutos} // Adicione a função de navegação ao onPress
          >
            <Text style={styles.verTodosButtonText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={produtos}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.produtosContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  swiperContainer: {
    height: 300,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationStyle: {
    bottom: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.2)',
    marginLeft: 3,
    marginRight: 3,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginLeft: 3,
    marginRight: 3,
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verTodosButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  verTodosButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  produtosContainer: {
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  itemInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden', // Para garantir que a sombra não ultrapasse os limites do borderRadius
  },
  itemImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
