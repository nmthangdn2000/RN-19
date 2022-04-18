import { Dimensions } from 'react-native';
import React from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import {
  Assets,
  Button,
  Colors,
  Text,
  Typography,
  View,
} from 'react-native-ui-lib';

interface Props {
  onContinue: () => void;
}

const WIDTH = Dimensions.get('window').width;

const EnterPhone = ({ onContinue }: Props) => {
  return (
    <View width={WIDTH} paddingH-40>
      <Text white title3b marginV-40>
        To continue enter{'\n'} your phone number
      </Text>
      <CustomTextInput
        icon={Assets.icons.iconPhone}
        placeholder="Phone"
        keyboardType="numeric"
      />
      <View marginT-32>
        <Button
          label="CONTINUE"
          backgroundColor={Colors.primary}
          color={Colors.n3}
          labelStyle={Typography.b16}
          onPress={onContinue}
        />
      </View>
    </View>
  );
};

export default EnterPhone;
