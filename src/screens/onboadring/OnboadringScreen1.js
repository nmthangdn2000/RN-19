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
      <TouchableOpacity style={styles.btnSkip}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../assets/images/ob1.png')}
      />
      <Text style={styles.title}>Numerous free trial courses</Text>
      <Text style={styles.subtitle}>
        Free courses for you to find your way to learning
      </Text>
      <View style={styles.viewDot}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
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
    marginBottom: 20,
  },
  image: {
    marginBottom: 34,
  },
  txtSkip: {
    color: '#858597',
    fontSize: 14,
  },
  title: {
    color: '#1F1F39',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 21,
  },
  subtitle: {
    color: '#858597',
    fontSize: 16,
    marginBottom: 53,
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
});
