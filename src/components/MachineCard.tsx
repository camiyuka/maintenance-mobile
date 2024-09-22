import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, Switch, StyleSheet } from 'react-native';
import MaintenanceCard from './MaintenanceCard'; // Assumindo que o MaintenanceCard está nesse caminho

const MachineCard = () => {
  const [inMaintenance, setInMaintenance] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Máquina</Text>
      <Text style={styles.label}>Tipo da Máquina</Text>
      <Text style={styles.label}>Localização</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Adicionar comentário:</Text>
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Digite seu comentário"
          style={styles.input}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Em Manutenção</Text>
        <Switch
          value={inMaintenance}
          onValueChange={setInMaintenance}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Detalhes"
          onPress={() => setModalVisible(true)}
          color="#4a6572"
        />
      </View>

      {/* Modal para Detalhes da Máquina */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Detalhes da Máquina</Text>
          <Text style={{ color: '#fff' }}>Nome da Máquina: XYZ</Text>
          <Text style={{ color: '#fff' }}>Modelo: XYYU</Text>
          <Text style={{ color: '#fff' }}>Data de fabricação: 20/08/2022</Text>
          <Text style={{ color: '#fff' }}>Número de série: 2986</Text>
          <Text style={{ color: '#fff' }}>Última manutenção: 20/08/2024</Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Ver Relatório de Manutenções"
              onPress={() => {
                setModalVisible(false);
                setReportModalVisible(true);
              }}
              color="#4a6572"
            />
          </View>

          <Button color="#b4b4b4" title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* Modal para Relatório de Manutenções */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={reportModalVisible}
        onRequestClose={() => setReportModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Relatório de Manutenções</Text>

          {/* Exemplo de três MaintenanceCard */}
          <MaintenanceCard
            description="Substituição da correia transportadora"
            date="20/09/2024"
            status="Finalizada"
          />
          <MaintenanceCard
            description="Revisão do motor"
            date="22/09/2024"
            status="Em andamento"
          />
          <MaintenanceCard
            description="Verificação dos sensores"
            date="18/09/2024"
            status="Finalizada"
          />

          <Button color="#b4b4b4" title="Fechar" onPress={() => setReportModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#9BB7BD',
    borderRadius: 10,
    margin: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: '70%', // Ajuste a largura conforme necessário
  },
  buttonContainer: {
    marginTop: 12,
    backgroundColor: '#4a6572',
    borderRadius: 5,
  },
  modalView: {
    margin: 0, // Alterar para 0 para ocupar toda a tela
    backgroundColor: '#4a6572', // Adicionar transparência ao fundo
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Adicionar para ocupar toda a tela
    color:'white'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color:"#fff"
  },
});

export default MachineCard;
