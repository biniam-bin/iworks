import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Pressable } from 'react-native';
import { useState } from 'react';
// import { ScrollView } from 'react-native-web';
// import Card from './components/Card';
// import Form from './components/Form';
import tw from 'tailwind-react-native-classnames';


const Form = () => {
  return (
    <View style={tw` mt-8 w-full h-40 flex items-center flex-col rounded-b-md`}>
      <Text style={tw`text-2xl text-purple-400`}>IWorks Members List</Text>
      <View style={tw` my-5 flex flex-row w-full items-center justify-center px-4 `}>
        <TextInput style={tw`mx-2 bg-gray-200 w-4/5 h-12 rounded-md text-xl px-2`} placeholder="New member's name..." />
        <Pressable style={tw`bg-blue-600 py-1 px-2 rounded text-white w-16 flex justify-center items-center`}><Text style={tw`text-lg text-white`}>Add</Text></Pressable>
      </View>
    </View>
  )
}

const Card = ({name}) => {
  return (
    <View style={tw`w-11/12 h-16 rounded-md my-1 bg-gray-400 flex justify-center items-center`}>
      <Text style={tw`text-xl text-black`}>{name}</Text>
    </View>
  )
}


export default function App() {
  const [names, setNames] = useState([])
  const [name, setName] = useState()
  const add = () => {
    setNames([...names, name])
    console.log(name)
    setName('')
    
  }
  return (
    <SafeAreaView>
      <View style={tw`rounded-b-lg w-full h-full`}>
        {/* //form */}
        <View style={tw` mt-8 w-full h-40 flex items-center flex-col rounded-b-md`}>
          <Text style={tw`text-2xl text-purple-400`}>IWorks Members List (<View accessibilityLabel='members'>{names.length}</View>)</Text>
          <View style={tw` my-5 flex flex-row w-full items-center justify-center px-4 `}>
            <TextInput value={name} accessibilityLabel="name" onChangeText={text => setName(text)} style={tw`mx-2 bg-gray-200 w-4/5 h-12 rounded-md text-xl px-2`} placeholder="New member's name..." />
            <Pressable onPress={add} accessibilityLabel="add" style={tw`bg-blue-600 py-1 px-2 rounded text-white w-16 flex justify-center items-center`}><Text style={tw`text-lg text-white`}>Add</Text></Pressable>
          </View>
        </View>
        {/* //form */}
        <View style={tw`h-full flex items-center`}>
          <ScrollView style={tw`w-full mb-52 flex bg-black`} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            {names.map((name, index) => {
              return(
                <Card key={index} name={name}/>
              )
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}




