import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import React, { useState } from 'react';
import { View, Assets, Image } from 'react-native-ui-lib';

interface Props {
  icon: any;
  password?: boolean;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

const CustomTextInput = ({
  icon,
  password = false,
  placeholder,
  keyboardType = 'default',
}: Props) => {
  const [secure, setSecure] = useState<boolean>(true);

  return (
    <View centerV paddingV-5>
      <Image source={icon} style={styles.iconInputText} />
      <TextInput
        placeholder={placeholder}
        style={styles.inputText}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        placeholderTextColor="#9F9F9F"
      />
      {password && (
        <TouchableOpacity
          style={styles.btnSecure}
          onPressIn={() => setSecure(false)}
          onPressOut={() => setSecure(true)}>
          <Image source={Assets.icons.eye} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 5,
  },
  btnSecure: {
    position: 'absolute',
    right: 0,
    height: '50%',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    paddingLeft: 30,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#9F9F9F',
  },
  iconInputText: {
    position: 'absolute',
  },
});
