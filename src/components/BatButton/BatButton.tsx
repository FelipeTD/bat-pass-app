import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  async function handleCopyButton() {
    await Clipboard.setStringAsync(pass);
  }

  return (
    <>
        {/* <Button 
            accessibilityLabel='Clique em mim'
            onPress={() => console.log('Ola')}
            title='CLICK AQUI'
            color={'#841584'}
        /> */}
        <BatTextInput 
            pass={pass}
        />
        
        <Pressable
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>✨COPY</Text>
        </Pressable>
    </>
  );
}