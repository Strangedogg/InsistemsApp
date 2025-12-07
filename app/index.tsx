import { Text, TouchableOpacity, View, Button } from "react-native";
import {Link} from "expo-router";
import { useState } from 'react';



//goes to: gerenciar salas
//goes to if: (View)
//        se houverem salas mas não houver um inventário rolando -> importar lista, 
//        se já houver lista importada e salas -> continuar e substitui a opção de importar pela barra de progresso do inventário
//        se já houverem inventários concluidos -> relatórios anteriores.


export default function Index() {
  
  const [salas, setSalas] = useState(true);
  const [lista, setLista] = useState(false);
  const [inventarios, setInventarios] = useState(false);


  return (
    
    <View className="flex-1 justify-center items-center">
      {salas && !lista && (
        <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2" onPress={() => setLista(!lista)}> 
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
    </View>
  );
}
