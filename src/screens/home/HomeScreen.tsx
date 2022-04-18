import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import ItemSong from './components/ItemSong';
import { View, Colors } from 'react-native-ui-lib';
import ListHeaderComponent from './components/ListHeaderComponent';

const data = [
  {
    title: 'Nice For What',
    subtitle: 'Avinci John',
  },
  {
    title: 'Where can I get some ?',
    subtitle: 'Arian Grande',
  },
  {
    title: 'Why do we use it ?',
    subtitle: 'Alan Walker ',
  },
  {
    title: 'Fall Out Boys',
    subtitle: 'Avinci John',
  },
  {
    title: 'Nice For What',
    subtitle: 'Avinci John',
  },
];

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar animated={true} backgroundColor={Colors.b2} />

        <View flex backgroundColor={Colors.b2}>
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={data}
            renderItem={({ item, index }) => (
              <ItemSong item={item} index={index} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
