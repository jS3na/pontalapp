import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Linking } from 'react-native';
import { Ionicons , FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

// Tela Contatos

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Quem somos?</Text>
      <Image
        source={require('../../assets/sobre_pontal_thumb.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.containerDescript}>

        <Text style={styles.subtitle}>
          Desde sua fundação em 1999, a Pontal se destaca no
          mercado de saneantes, comprometida com a inovação e
          sustentabilidade.
        </Text>
        <Text style={styles.subtitle}>
          Originada da visão de oferecer produtos de limpeza eficazes
          e acessíveis, a empresa rapidamente se posicionou como
          líder em soluções de limpeza doméstica.
        </Text>
        <Text style={styles.subtitle}>      
          Superando desafios e estabelecendo parcerias estratégicas,
          a Pontal expandiu sua linha de produtos, sempre guiada
          pela pesquisa e desenvolvimento focados no equilíbrio
          entre eficiência e responsabilidade ambiental.
        </Text>
        <Text style={styles.subtitle}>
          Com o passar dos anos, a Pontal solidificou seu compromisso
          com a qualidade, a inovação e o bem-estar do planeta e de
          seus habitantes. A empresa se mantém firme em sua missão
          de liderar o segmento de saneantes sustentáveis, deixando
          um legado positivo para as futuras gerações.
        </Text>
        <Text style={styles.subtitle}>
          Através de cada um dos nossos produtos, a Pontal reitera o
          compromisso com um mundo mais limpo e seguro, afinal,
          fazemos jus quando nosso consumidor diz “La em casa tudo
          é Pontal” quando nosso colaborador acredita que “Aqui tudo
          é Pontal” e quando afirmamos ao universo: “Pontal limpa
          tudo mesmo”.
        </Text>
        <Text style={styles.signature}>				
        Atenciosamente,
        Meiriane Antunes Ribeiro e Macedo.						
        </Text>

      </View>

      <View style={styles.containerMissao}>

        <Text style={styles.titleMissao}>Missão</Text>
        <Text style={styles.subtitleMissao}>A GE Indústria tem a missão de ser referência no mecado de saneantes, 
          na indústria de transformação sustentável, visando satisfação dos clientes com produtos de alta qualidade, 
          desempenho e bem estar de seus colaboradores.
        </Text>

        <Image
        source={require('../../assets/trofeu_branco.png')}
        style={styles.imageTrofeu}
        resizeMode="cover"
        />

        <Text style={styles.titleMissao}>Visão</Text>
        <Text style={styles.subtitleMissao}>Ser uma marca forte e reconhecida pela excelência de seus serviços, 
          contribuindo para o desenvolvimento sustentável.
        </Text>

      </View>

      <View style={styles.containerEtica}>

        <Text style={styles.title}>Valores Éticos</Text>
        
        <Image
        source={require('../../assets/pontal_banner.png')}
        style={styles.imageBanner}
        resizeMode="cover"
        />

        <Text style={styles.subtitle}>
        Humildade – Estar sempre dispoto a aprender.
        </Text>
        <Text style={styles.subtitle}>
        Simplicidade – Estar sempre disposto a esclarecer.
        </Text>
        <Text style={styles.subtitle}>
        Comprometimento – Cumprir tarefas.
        </Text>
        <Text style={styles.subtitle}>
        Qualidade – Adotar as melhores práticas.
        </Text>
        <Text style={styles.subtitle}>
        Responsabilidade – Que suas ações seja sempre no sentido de contribuir para o melhor.
        </Text>

      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    color: '#004C97',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 21,
    color: '#004C97',
    marginBottom: 10,
    textAlign: 'center'
  },
  signature: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },
  image: {
    width: '80%',
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
  containerDescript: {
    //backgroundColor: 'red',
    padding: 20,
  },

  containerMissao: {
    flexDirection: 'column',
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#004C97'
  },

  titleMissao: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitleMissao: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  },

  imageTrofeu: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  containerEtica:{
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageBanner: {
    width: 320,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },

});
