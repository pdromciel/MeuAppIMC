import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a) {
      setResultado('Preencha os campos');
      return;
    }

    const imc = p / (a * a);

    setResultado(`Seu IMC é ${imc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});