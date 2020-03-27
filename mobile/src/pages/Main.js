import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: 38.8565808, longitude: -9.0691528 }}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://avatars3.githubusercontent.com/u/11559401?s=460&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", {
                github_username: "LuckyStrike001"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Bruno Novais</Text>
              <Text style={styles.devBio}>Apaixonado por tecnologia</Text>
              <Text style={styles.devTechs}>ReactJS, React Native, NodeJS</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search dev by techs"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        ></TextInput>
        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF"
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16
  },

  devBio: {
    color: "#666",
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  },

  searchForm: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row"
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },

  loadButton: {}
});

export default Main;
