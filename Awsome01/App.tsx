import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  Text,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello World</Text>
          <Text>Hey salim</Text>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 300, height: 200, borderBottomLeftRadius: 5}}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            defaultValue="You can type in me"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
