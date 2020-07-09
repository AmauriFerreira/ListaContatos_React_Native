import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


 
export default function App() {



const [nome, setNome] = useState(''); 
const [numero, setNumero] = useState(''); 

const [contato, setContatos] = useState ([]);

const [contadorContatos, setContadorContatos] = useState(0);

const capturaNome = (nome) => {
  setNome(nome);
}
const capturaNumero = (numero) => {
  setNumero(numero);
}

const addContato = (lembrete) => {
  setContatos((contato) => {
    setContadorContatos(contadorContatos + 1);
    return [...contato, { key: contadorContatos.toString(), nome,numero }]
  });
  const removerContato = (keyASerRemovida) => {
    setContato(contato => {
      return contato.filter((contato) => { return contato.key !== keyASerRemovida })
    })
  }
}
function Separator() {
  return <View style={styles.separator} />;
}



  return (
    <View style={styles.telaPrincipalView}>
    
      <View>
      {/* usuário irá inserir contatos aqui*/}
      <TextInput placeholder="Nome do contato..." 
      style={styles.ContatoInputText}
      onChangeText = {capturaNome}
      value = {nome}
      />
      <Separator />
      <TextInput placeholder="Número do contato..." 
      style={styles.ContatoInputText}
      onChangeText = {capturaNumero}
      value = {numero}
      />
      <Separator />
      <Button
      title="+"
      onPress ={addContato}
      />
      </View>
      <View>
      <Separator />
      {/*Aqui será exibida a lista de contatos*/}
      <FlatList
        data={contato}
        renderItem={
          contato => (
              <View style={styles.itemNaLista}>
                <Text>{contato.item.value}</Text>          
     <Text style={{fontSize:18, color:"#EEE", marginTop: 7}}>Nome: {contato.item.nome}</Text>
    <Text style={{fontSize:18, color:"#EEE", marginTop: 7}}>Numero: {contato.item.numero}</Text>
              </View>
          )
        }
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 18,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  telaPrincipalView: {
  padding: 50
  },
  lembreteView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: "center"
  },
  ContatoInputText: {
  width: '80%',
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
  padding: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});