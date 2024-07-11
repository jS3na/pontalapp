import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import artigos from '../variables/listArtigos'

export default function Blog() {
  return (
    <View style={styles.container}>
      <FlatList
        data={artigos}
        renderItem={({ item }) => (
          <Pressable style={styles.containerArtigo} onPress={() => {}}>
            <ImageBackground 
              source={item.imagem }
              style={styles.background}
            >
              <View style={styles.containerInnerArtigo}>
                <Text style={styles.dataArtigo}>
                  <Feather style={styles.dataIcon} name="calendar" size={13} color="white" />{item.data}
                </Text>
                <Text style={styles.nomeArtigo}>{item.nome}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  containerArtigo: {
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  containerInnerArtigo: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  dataArtigo: {
    color: '#fff',
    fontSize: 12,
  },
  dataIcon:{
    margin: 10,
  },
  nomeArtigo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
