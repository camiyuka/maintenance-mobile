import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Para o ícone de robô
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Para os demais ícones
import MachineCard from './src/components/MachineCard';
import MaintenanceCard from './src/components/MaintenanceCard';
import MaintenanceModal from './src/components/MaintenanceModal';
import RegisterParts from './src/components/RegisterParts'
import PieceCard from './src/components/PieceCard';

const Tab = createBottomTabNavigator();

function MachinesScreen() {
  return (
    <ScrollView> 
      <MachineCard/>
      <MachineCard/>
      <MachineCard/>
    </ScrollView>
  );
}
function MaintenanceScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {/* Exemplo de manutenção finalizada */}
        <MaintenanceCard
          description="Manutenção da máquina X"
          date="20/09/2024"
          status="Pendente"
        />

        {/* Exemplo de manutenção em andamento */}
        <MaintenanceCard
          description="Manutenção da máquina Y"
          date="22/09/2024"
          status="Em andamento"
        />

        <Button color='#4a6572' title="Adicionar Manutenção" onPress={() => setModalVisible(true)}/>

        <MaintenanceModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />

        {/* Adicione quantos cards de manutenção forem necessários */}
      </View>
    </ScrollView>
  );
}

function StockScreen(){
  return(
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#F5F5F5' }}>
    <PieceCard pieceName='Rolamento de Esferas' quantity='136' />
    <PieceCard pieceName='Parafuso' quantity='500' />
    <PieceCard pieceName='Porca' quantity='75' />
    <PieceCard pieceName='Cabo' quantity='30' />
  </ScrollView>
);
}


function RegisterPartsScreen() {
  return (
    <View> 
      <RegisterParts/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let IconComponent;

            if (route.name === 'MachinesScreen') {
              IconComponent = MaterialCommunityIcons; // Usando MaterialCommunityIcons para o robô
              iconName = focused ? 'robot' : 'robot-outline'; // Robô
            } else if (route.name === 'MaintenanceScreen') {
              IconComponent = FontAwesome5; // Usando FontAwesome5 para o martelo
              iconName = 'tools'; // Martelo para manutenção
            } else if (route.name === 'StockScreen') {
              IconComponent = FontAwesome5; // Usando FontAwesome5 para engrenagem
              iconName = 'cogs'; // Engrenagem para estoque
            } else if (route.name === 'TeamsScreen') {
              IconComponent = FontAwesome5; // Usando FontAwesome5 para pessoas
              iconName = 'users'; // Pessoas para equipes
            }

            // Retorna o ícone correto
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'navy',  // Cor dos ícones quando ativos
          tabBarInactiveTintColor: 'darkgray',  // Cor dos ícones quando inativos
          tabBarStyle: { backgroundColor: '#9BB7BD' },  // Cor de fundo da barra
        })}
      >
        <Tab.Screen name="MachinesScreen" component={MachinesScreen} options={{ tabBarLabel: 'Máquinas' }} />
        <Tab.Screen name="MaintenanceScreen" component={MaintenanceScreen} options={{ tabBarLabel: 'Manutenção' }} />
        <Tab.Screen name="StockScreen" component={StockScreen} options={{ tabBarLabel: 'Estoque' }} />
        <Tab.Screen name="TeamsScreen" component={RegisterPartsScreen} options={{ tabBarLabel: 'Registro de peças' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
