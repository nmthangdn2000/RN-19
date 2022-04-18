import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Button, Colors, Text, Typography, View } from 'react-native-ui-lib';

const WIDTH = Dimensions.get('window').width;
const arrayLength = [1, 2, 3, 4];

const EnterCode = () => {
  const refInput = useRef<TextInput>(null);
  const [code, setCode] = useState<string>('');
  return (
    <View width={WIDTH} paddingH-40>
      <Text white title3b marginV-40>
        To continue enter{'\n'} your phone number
      </Text>
      <View row spread>
        {arrayLength.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.txtNumber,
                {
                  borderBottomColor: !!code[index] ? Colors.primary : '#37383C',
                },
              ]}
              onPress={() => {
                refInput.current?.focus();
              }}>
              <Text title3m white>
                {code[index]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View marginT-32>
        <Button
          label="CONTINUE"
          backgroundColor={Colors.primary}
          color={Colors.n3}
          labelStyle={Typography.b16}
        />
        <Text primary b14 center marginT-35>
          Resent Code
        </Text>
      </View>
      <TextInput
        style={styles.inputHidden}
        ref={refInput}
        keyboardType="numeric"
        maxLength={arrayLength.length}
        onChangeText={value => {
          setCode(value);
        }}
      />

      {/* <Modal>
          <View>

          </View>
      </Modal> */}
    </View>
  );
};

export default EnterCode;

const styles = StyleSheet.create({
  txtNumber: {
    width: 45,
    height: 60,
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHidden: {
    backgroundColor: 'red',
    position: 'absolute',
    top: -100,
  },
});
