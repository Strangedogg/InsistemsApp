import { Text, TouchableOpacity, View, Modal,TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const GerenciarSalas = () => {
  const [roomName, setRoomName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleSaveRoom = () => {
    if (roomName.trim()) {
      
      console.log("Sala salva:", roomName);
      // here I will have to use a reader to save the room somewhere
      setRoomName("");
      setModalVisible(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity 
        className="p-5 bg-blue-500 rounded-lg m-2" 
        onPress={() => setModalVisible(true)}
      > 
        <Text className="text-4xl text-primary font-bold">
         Nova Sala
        </Text>
      </TouchableOpacity>

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
                    {/* Card do modal */}
          <View style={{
            backgroundColor: 'white',
            padding: 25,
            borderRadius: 15,
            width: '85%',
            alignItems: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
            {/* Título */}
            <Text style={{
              fontSize: 22, 
              fontWeight: 'bold', 
              marginBottom: 20,
              color: '#1f2937'
            }}>
              Nova Sala
            </Text>

            {/* Campo de texto para nome da sala */}
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#d1d5db',
                borderRadius: 10,
                padding: 12,
                fontSize: 16,
                width: '100%',
                backgroundColor: '#f9fafb',
                marginBottom: 25,
              }}
              placeholder="Digite o nome da sala"
              value={roomName}
              onChangeText={setRoomName}
              autoFocus={true}
            />

            {/* Container dos botões */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              {/* Botão Cancelar */}
              <TouchableOpacity 
                style={{
                  backgroundColor: '#ef4444',
                  padding: 12,
                  borderRadius: 8,
                  flex: 1,
                  marginRight: 10,
                  alignItems: 'center',
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{
                  color: 'white', 
                  fontSize: 16, 
                  fontWeight: 'bold'
                }}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              {/* Botão Salvar */}
              <TouchableOpacity 
                style={{
                  backgroundColor: '#3AA76D',
                  padding: 12,
                  borderRadius: 8,
                  flex: 1,
                  marginLeft: 10,
                  alignItems: 'center',
                }}
                onPress={handleSaveRoom}
              >
                <Text style={{
                  color: 'white', 
                  fontSize: 16, 
                  fontWeight: 'bold'
                }}>
                  Salvar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

        </View>
      );
    }
export default GerenciarSalas

