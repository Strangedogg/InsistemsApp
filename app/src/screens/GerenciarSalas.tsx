import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const GerenciarSalas = () => {
  const [showInput, setShowInput] = useState(false);
  const [roomName, setRoomName] = useState("");

  const handleSaveRoom = () => {
    if (roomName.trim()) {
      
      console.log("Sala salva:", roomName);
      // here I will have to use a reader to save the room somewhere
      setRoomName("");
      setShowInput(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity 
        className="p-5 bg-blue-500 rounded-lg m-2" 
        onPress={() => setShowInput(!showInput)}
      > 
        <Text className="text-4xl text-primary font-bold">
          {showInput ? "Cancelar" : "Nova Sala"}
        </Text>
      </TouchableOpacity>

      {showInput && (
        <View className="mt-4 w-80">
          <TextInput
            className="border border-gray-400 rounded-lg p-3 text-lg bg-white mb-3"
            placeholder="Digite o nome da sala"
            value={roomName}
            onChangeText={setRoomName}
            autoFocus={true}
          />
          
          <TouchableOpacity 
            className="p-3 bg-green-500 rounded-lg"
            onPress={handleSaveRoom}
          >
            <Text className="text-white text-center text-lg">Salvar Sala</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default GerenciarSalas

