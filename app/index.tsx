import { Text, TouchableOpacity, View, Button } from "react-native";
import {Link} from "expo-router";
import { useState } from "react";

//goes to: gerenciar salas
//goes to if: 
//        se houverem salas mas não houver um inventário rolando -> importar lista, 
//        se já houver lista importada e salas -> continuar e substitui a opção de importar pela barra de progresso do inventário
//        se já houverem inventários concluidos -> relatórios anteriores.


export default function Index() {
  
  let salas = true;       // salas criadas?
  let lista = true;       // lista importada?
  let inventarios = true; // inventários concluidos?


  return (
    <View className="flex-1 justify-center items-center">
      {salas && !lista &&(<Link className="text-4xl text-primary font-bold" href="./Shared/Components/NovoInventario">Novo Inventário</Link>)}
      {salas  && lista && (<Link className="text-4xl text-primary font-bold" href="./Shared/Components/Inventario">Continuar</Link>)}
      {inventarios && <Link className="text-4xl text-primary font-bold" href="./Shared/Components/BaixarRelatoriosAnteriores">Relatórios Anteriores</Link>}
      
      <Link className="text-4xl text-primary font-bold" href="./Shared/Components/GerenciarSalas">Gerenciar Salas</Link>
    </View>
  );
}
