import {Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import SalimTest from './components/SalimTest';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
//import ElevatedCards from './components/ElevatedCards';
//import FancyCard from './components/FancyCard';
//import ActionCard from './components/ActionCard';
//import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Salim APP</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
        <SalimTest />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
/*   <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard /> */
