import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
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

export default Form