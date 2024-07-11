import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ProdutoDetalhes = ({ route }) => {
    const { produto } = route.params;

    const abrirWhatsApp = () => {
        const mensagem = `Olá! Gostaria de saber mais sobre o produto ${produto.nome}!`;
        const numeroWhatsApp = '5586988585569';
        const url = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        Linking.openURL(url);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={produto.imagem}
                style={styles.imageProduto}
                resizeMode="cover"
            />
            <Text style={styles.produtoNome}>{produto.nome}</Text>
            <Text style={styles.descricao}>{produto.descricao}</Text>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Benefícios:</Text>
                {produto.beneficios.map((beneficio, index) => (
                    <Text key={index} style={styles.beneficioItem}>
                        {beneficio}
                    </Text>
                ))}
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Modo de Uso:</Text>
                {produto.mododeuso.map((mododeuso, index) => (
                    <Text key={index} style={styles.mododeusoItem}>
                        {mododeuso}
                    </Text>
                ))}
            </View>

            <TouchableOpacity onPress={abrirWhatsApp} style={styles.botaoSaibaMais}>
                <Text style={styles.textoBotao}>Saiba mais no WhatsApp</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    imageProduto: {
        width: '50%',
        height: 230,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    produtoNome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#004C97',
        marginBottom: 10,
        textAlign: 'center',
    },
    descricao: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
        color: '#004C97',
    },
    beneficioItem: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
    mododeusoItem: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
    botaoSaibaMais: {
        backgroundColor: '#25D366',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 30,
        alignSelf: 'center',
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProdutoDetalhes;
