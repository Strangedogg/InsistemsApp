import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link className="text-4xl text-primary font-bold" href="/NovoInventario">Novo Inventário</Link>
      <Link className="text-4xl text-primary font-bold" href="/GerenciarInventarios">Gerenciar Inventários</Link>
      <Link className="text-4xl text-primary font-bold" href="/GerenciarSalas">Gerenciar Salas</Link>
    </View>
  );
}
