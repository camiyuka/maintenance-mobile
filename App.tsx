import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Para o ícone de robô
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Para os demais ícones
import MachineCard from './src/components/MachineCard';
import MaintenanceCard from './src/components/MaintenanceCard';

const Tab = createBottomTabNavigator();

function MachinesScreen() {
  return (
    <View> 
      <MachineCard/>
      <MachineCard/>
      <MachineCard/>
    </View>
  );
}

function MaintenanceScreen() {
  return (
    <ScrollView>
    {/* Exemplo de manutenção finalizada */}
    <MaintenanceCard
      description="Manuntenção da máquina X"
      date="20/09/2024"
      status="Pendente"
    />

    {/* Exemplo de manutenção em andamento */}
    <MaintenanceCard
      description="Manuntenção da máquina Y"
      date="22/09/2024"
      status="Em andamento"
    />

    {/* Adicione quantos cards de manutenção forem necessários */}
  </ScrollView>
  );
}

function StockScreen() {
  return (
    <View> 
      <Text> Teste Stock Screen </Text>
    </View>
  );
}

function TeamsScreen() {
  return (
    <View> 
      <Text> Teste Teams Screen </Text>
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
        <Tab.Screen name="TeamsScreen" component={TeamsScreen} options={{ tabBarLabel: 'Equipes' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
