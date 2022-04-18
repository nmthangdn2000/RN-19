import { StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, View, Assets } from 'react-native-ui-lib';

const url =
  'https://api.openweathermap.org/data/2.5/weather?lon=108.201685&lat=16.050337&appid=33e61186254ecc50e7d4298f5fb97f4d&units=metric';

const HomeScreen = () => {
  const [dataWeather, setDataWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchDataWeather();
    const a = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  const fetchDataWeather = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      setDataWeather(json);
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  };

  return (
    <ImageBackground style={styles.area} source={Assets.background.background}>
      {loading ? (
        err ? (
          <Text>{err}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )
      ) : (
        <View style={styles.container}>
          {/* nhiệt độ */}
          <Text title1b>{dataWeather?.main?.temp} °C</Text>
          <Text title3b>Đà Nẵng</Text>
          <View row marginT-200>
            <View marginH-20 centerH>
              <Text title5b>Gió</Text>
              {/* Gió */}
              <Text title4r>{dataWeather?.wind?.speed}</Text>
            </View>
            <View marginH-20 centerH>
              <Text title5b>Nhiệt độ</Text>
              {/* nhiệt độ */}
              <Text title4r>{dataWeather?.clouds?.all}</Text>
            </View>
            <View marginH-20 centerH>
              <Text title5b>Độ ẩm</Text>
              {/* độ ẩm */}
              <Text title4r>{dataWeather?.main?.humidity}</Text>
            </View>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
