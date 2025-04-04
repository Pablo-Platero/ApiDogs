import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Hoverable } from "react-native-web-hover";
import { Character } from "../types/character";

const DogCard = ({
  dog,
  navigation,
}: {
  dog: Character;
  navigation: any;
}) => {
  return (
    <Hoverable>
      {({ hovered }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details", { dog })}>
          <View
            style={[
              styles.card,
              hovered && styles.cardHover,
              Platform.OS === "web"
                ? ({ transition: "all 0.3s ease-in-out" } as any) // 👈 truco TypeScript
                : {},
            ]}
          >
            {dog.image?.url && (
              <Image source={{ uri: dog.image.url }} style={styles.image} />
            )}
            <Text style={styles.name}>{dog.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </Hoverable>
  );
};

export default DogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHover: {
    backgroundColor: "#f5f5f5",
    transform: [{ scale: 1.03 }],
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
