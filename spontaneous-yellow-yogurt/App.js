import React, { useState } from 'react';  
import {  
  StyleSheet,   
  Text,   
  TextInput,   
  View,   
  TouchableOpacity  
} from 'react-native';  

export default function App() {  
  const [num1, setNum1] = useState('');  
  const [num2, setNum2] = useState('');  
  const [result, setResult] = useState('');  

  const handleAddition = () => {  
    const number1 = parseFloat(num1) || 0;  
    const number2 = parseFloat(num2) || 0;  
    setResult((number1 + number2).toString());  
  };  

  const handleSubtraction = () => {  
    const number1 = parseFloat(num1) || 0;  
    const number2 = parseFloat(num2) || 0;  
    setResult((number1 - number2).toString());  
  };  

  const handleMultiplication = () => {  
    const number1 = parseFloat(num1) || 0;  
    const number2 = parseFloat(num2) || 0;  
    setResult((number1 * number2).toString());  
  };  

  const handleDivision = () => {  
    const number1 = parseFloat(num1) || 0;  
    const number2 = parseFloat(num2) || 0;  
    if (number2 !== 0) {  
      setResult((number1 / number2).toString());  
    } else {  
      setResult('Cannot divide by zero');  
    }  
  };

  const handlePower = () => {  
    const number1 = parseFloat(num1) || 0;  
    const number2 = parseFloat(num2) || 0;  
    setResult(Math.pow(number1, number2).toString());  
  };  

  const handleSquareRoot = () => {  
    const number1 = parseFloat(num1) || 0;  
    if (number1 >= 0) {
      setResult(Math.sqrt(number1).toString());  
    } else {
      setResult('Invalid input for square root');
    }
  };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Calculator App</Text>  
      <TextInput  
        style={styles.input}  
        keyboardType="numeric"  
        placeholder="Enter number"  
        value={num1}  
        onChangeText={setNum1}  
      />  
      <TextInput  
        style={styles.input}  
        keyboardType="numeric"  
        placeholder="Enter number"  
        value={num2}  
        onChangeText={setNum2}  
      />  

      <View style={styles.buttons}>  
        <TouchableOpacity style={styles.button} onPress={handleAddition}>  
          <Text style={styles.buttonText}>Add</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} onPress={handleSubtraction}>  
          <Text style={styles.buttonText}>Subtract</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} onPress={handleMultiplication}>  
          <Text style={styles.buttonText}>Multiply</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} onPress={handleDivision}>  
          <Text style={styles.buttonText}>Divide</Text>  
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={handlePower}>  
          <Text style={styles.buttonText}>Power</Text>  
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={handleSquareRoot}>  
          <Text style={styles.buttonText}>Square Root</Text>  
        </TouchableOpacity> 
      </View>  

      <Text style={styles.result}>Result: {result}</Text>  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    padding: 10,  
  },  
  title: {  
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
  input: {  
    height: 40,  
    width: '80%',  
    borderColor: 'gray',  
    borderWidth: 1,  
    borderRadius: 5,  
    paddingHorizontal: 10,  
    marginBottom: 10,  
    fontSize: 18,  
  },  
  buttons: {  
    justifyContent: 'space-evenly',  
    width: '90%',  
    margin: 20,  
    alignItems: 'center', 
  },  
  button: {  
    backgroundColor: 'pink',  
    padding: 9,  
    borderRadius: 20,  
    width: '50%',  
    marginBottom: 9, 
    alignItems: 'center',  
  },  
  buttonText: {  
    fontSize: 15,  
  },  
  result: {  
    fontSize: 20,  
  },  
});  
