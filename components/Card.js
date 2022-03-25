import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const Card = () => {
  return (
    <View style={tw`w-11/12 h-16 rounded-md my-1 bg-gray-400 flex justify-center items-center`}>
      <Text style={tw`text-xl tetx-black`}>Card</Text>
    </View>
  )
}

export default Card