import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import produtos from '../variables/listProdutos';

const Produtos = () => {
    const navigation = useNavigation();
    const [filteredProdutos, setFilteredProdutos] = useState(produtos);
    const [searchText, setSearchText] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const filterByType = (type) => {
        if (type === 'Todos') {
            setFilteredProdutos(produtos);
        } else {
            const filtered = produtos.filter((produto) => produto.tipo === type);
            setFilteredProdutos(filtered);
        }
    };

    const searchProducts = (text) => {
        setSearchText(text);
        const filtered = produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProdutos(filtered);
    };

    const navigateToDetalhes = (produto) => {
        navigation.navigate('ProdutoDetalhes', { produto });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todos os Produtos</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Pesquisar produtos..."
                value={searchText}
                onChangeText={searchProducts}
            />
            <TouchableOpacity onPress={() => setShowFilters(!showFilters)} style={styles.filterToggleButton}>
                <Text style={styles.filterToggleText}>{showFilters ? 'Fechar Filtros' : 'Abrir Filtros'}</Text>
            </TouchableOpacity>
            {showFilters && (
                <View style={styles.filtersContainer}>
                    <Text style={styles.filterText}>Filtrar por:</Text>
                    <TouchableOpacity onPress={() => filterByType('Todos')}>
                        <Text style={styles.filterButton}>Todos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterByType('Limpeza do Banheiro')}>
                        <Text style={styles.filterButton}>Limpeza do Banheiro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterByType('Limpeza da Cozinha')}>
                        <Text style={styles.filterButton}>Limpeza da Cozinha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterByType('Lava Roupas')}>
                        <Text style={styles.filterButton}>Lava Roupas</Text>
                    </TouchableOpacity>
                </View>
            )}
            <FlatList
                data={filteredProdutos}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.produtoContainer} onPress={() => navigateToDetalhes(item)}>
                        <View style={styles.produtoInnerContainer}>
                            <Image source={item.imagem} style={styles.produtoImagem} />
                            <Text style={styles.produtoNome}>{item.nome}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        color: '#004C97',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    filterToggleButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    filterToggleText: {
        color: '#fff',
        fontSize: 16,
    },
    filtersContainer: {
        marginBottom: 20,
    },
    filterText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterButton: {
        fontSize: 16,
        color: '#007bff',
        marginBottom: 10,
    },
    produtoContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
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
    produtoInnerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden', // Para garantir que a sombra não ultrapasse os limites do borderRadius
    },
    produtoImagem: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
    },
    produtoNome: {
        color: '#004C97',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
});

export default Produtos;
