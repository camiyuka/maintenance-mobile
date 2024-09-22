import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Picker } from 'react-native';

const MaintenanceModal = ({ visible, onClose }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('baixa');
  const [responsible, setResponsible] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log({ description, priority, responsible });
    onClose(); // Fecha o modal após o envio
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Adicionar Manutenção</Text>

        <Text style={styles.label}>Descrição do Problema</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva o problema"
        />

        <Text style={styles.label}>Prioridade</Text>
        <Picker
          selectedValue={priority}
          style={styles.picker}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Picker.Item label="Baixa" value="baixa" />
          <Picker.Item label="Média" value="media" />
          <Picker.Item label="Alta" value="alta" />
        </Picker>

        <Text style={styles.label}>Responsável</Text>
        <TextInput
          style={styles.input}
          value={responsible}
          onChangeText={setResponsible}
          placeholder="Nome do responsável"
        />

        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={handleSubmit} color="#4a6572" />
          <Button title="Cancelar" onPress={onClose} color="#b2101f" />
        </View>
      </View>
    </Modal>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: '#9BB7BD',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,

  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default MaintenanceModal;
