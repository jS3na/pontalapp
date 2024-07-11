import React from 'react';
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function Contatos() {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/5586988585569');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/pontalprodutos/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Fale Conosco</Text>
      <Text style={styles.subtitle}>
        <Feather name="phone" size={24} color="#004C97" /> (86) 98858-5569
      </Text>

      <Text style={styles.sectionTitle}>Nossas redes</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={openWhatsApp}>
          <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={openInstagram}>
          <AntDesign name="instagram" size={24} color="#E1306C" />
          <Text style={styles.buttonText}>Instagram</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Atendimento</Text>
      <Text style={styles.subtitle}>
        <AntDesign name="clockcircleo" size={24} color="#004C97" /> Segunda à Sexta - 8h às 12h | 14h às 18h
      </Text>

      <Text style={styles.sectionTitle}>Localização</Text>
      <Text style={styles.subtitle}>
        <Feather name="map" size={24} color="#004C97" /> Rua Particular Mata dos Algodões, 5060
      </Text>
      <Text style={styles.subtitle}>Alto da Ressurreição - Teresina/PI</Text>
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
  sectionTitle: {
    fontSize: 24,
    color: '#004C97',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
