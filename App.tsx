import { useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Rive, { Fit, RiveRef } from 'rive-react-native';

export default function App() {

  const riveRef = useRef<RiveRef>(null)

  function changeAnimation(isTyping: boolean) {

    riveRef.current?.setInputState("State Machine 1", "Boolean 1", isTyping);

  }


  return (
    <View style={styles.container}>
      <Rive
        resourceName='password_input'
        style={{
          width: '100%',
          maxHeight: 330,
        }}
        autoplay={true}
        fit={Fit.Cover}
        ref={riveRef}
      />
      <TextInput
        placeholder='Seu@email.com'
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='emailAddress'
      />
      <TextInput
        placeholder='Sua senha'
        style={styles.input}
        secureTextEntry
        onFocus={() => changeAnimation(true)}
        onBlur={() => changeAnimation(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    gap: 12,
  },
  input: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    paddingHorizontal: 16,
    fontSize: 16,
  }
});
