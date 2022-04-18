import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const OnboadringScreen = () => {
  return (
    <View style={styles.area}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.btnSkip} />
      <Image
        style={styles.image}
        source={require('../../assets/images/ob3.png')}
      />
      <Text style={styles.title}>Create your own study plan</Text>
      <Text style={styles.subtitle}>
        Study according to the study plan, make study more motivated
      </Text>
      <View style={styles.viewDot}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.txtBtnSignUp}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtBtnLogin}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboadringScreen;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    paddingTop: '20%',
  },
  btnSkip: {
    alignSelf: 'flex-end',
    marginBottom: 34,
  },
  image: {
    marginBottom: 34,
  },
  title: {
    color: '#1F1F39',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 21,
    textAlign: 'center',
  },
  subtitle: {
    color: '#858597',
    fontSize: 16,
    marginBottom: 53,
    textAlign: 'center',
  },
  viewDot: {
    flexDirection: 'row',
  },
  dot: {
    height: 5,
    width: 9,
    marginHorizontal: 5,
    backgroundColor: '#EAEAFF',
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: '#3D5CFF',
    width: 28,
  },
  bottom: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSignUp: {
    backgroundColor: '#3D5CFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '48%',
  },
  btnLogin: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderColor: '#3D5CFF',
    borderWidth: 1,
    width: '48%',
  },
  txtBtnSignUp: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  txtBtnLogin: {
    color: '#3D5CFF',
    fontSize: 16,
  },
});
