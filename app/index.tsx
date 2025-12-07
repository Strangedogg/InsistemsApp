import { Link } from "expo-router";
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from "react-native";



//goes to: gerenciar salas
//goes to if: (View)
//        se houverem salas mas não houver um inventário rolando -> importar lista, 
//        se já houver lista importada e salas -> continuar e substitui a opção de importar pela barra de progresso do inventário
//        se já houverem inventários concluidos -> relatórios anteriores.


export default function Index() {
  
  const [salas, setSalas] = useState(true);
  const [lista, setLista] = useState(false);
  const [inventarios, setInventarios] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View className="flex-1 justify-center items-center">
      {salas && !lista && (
        <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2" onPress={() => setModalVisible(true)}>
          <Text className="text-4xl text-primary font-bold">Novo Inventário</Text>
        </TouchableOpacity> 
      )}

      {lista && (
          <Text className="text-4xl text-primary font-bold">Barra de Progresso</Text>
      )}
      
      {salas && lista && (
        <Link href="/src/screens/Inventario" asChild>
          <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
            <Text className="text-4xl text-primary font-bold">Inventário</Text>
          </TouchableOpacity>
        </Link>
      )}
      
      {inventarios && (
        <Link href="/src/screens/BaixarRelatoriosAnteriores" asChild>
          <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
            <Text className="text-4xl text-primary font-bold">Relatórios Anteriores</Text>
          </TouchableOpacity>
        </Link>
      )}
      
      <Link href="/src/screens/GerenciarSalas" asChild>
        <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
          <Text className="text-4xl text-primary font-bold">Gerenciar Salas</Text>
        </TouchableOpacity>
      </Link>
       <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
            width: '80%'
          }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'left',}}>
              Novo inventário
            </Text>
            <Text style={{fontSize:16, color:'#373F51',marginBottom : 25}}>Importe o PDF da lista de demandas para iniciar o seu inventário</Text>
            <TouchableOpacity 
              style={{
                backgroundColor: '#3A6F78',
                padding: 15,
                borderRadius: 8,
                width: '100%',
                alignItems: 'center'
              }}
              onPress={() => {
                // Primeiro importa a lista
                setLista(true);
                // Depois fecha o modal
                setModalVisible(false);
              }}
            >
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Importar Lista
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
