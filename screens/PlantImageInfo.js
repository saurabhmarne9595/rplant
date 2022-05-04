import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlantImageInfo(props) {
  const [dat, useDat] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    const getPlantInfo = async () => {
      // console.log("PROPS", props.route.params.data[0]);
      const Class =
        props.route.params.data[0].suggestions[0].plant_details.taxonomy.class;
      console.log(Class);
      useDat(props.route.params.data[0]);

      console.log(
        "URL:",
        props.route.params.data[0].suggestions[0].plant_details.url
      );

      getPlantInfo();
    };
  }, [props.route.params.data[0]]);
  const handleReturn = () => {
    navigation.navigate("MainScreen");
  };
  return (
    <Screen>
      <ScrollView>
        {/* {console.log(props.route.params.data[0].suggestions[0])} */}
        <AppText style={{ fontWeight: "bold" }}>Common Names:</AppText>
        <AppText>
          {props.route.params.data[0].suggestions[0].plant_details
            .common_names[0] != null
            ? props.route.params.data[0].suggestions[0].plant_details
                .common_names[0]
            : ""}
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Link:</AppText>
        <AppText>
          {props.route.params.data[0].suggestions[0].plant_details.url}
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Class:</AppText>
        <AppText>
          {
            props.route.params.data[0].suggestions[0].plant_details.taxonomy
              .class
          }
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Family:</AppText>
        <AppText>
          {
            props.route.params.data[0].suggestions[0].plant_details.taxonomy
              .family
          }
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Kingdom:</AppText>
        <AppText>
          {
            props.route.params.data[0].suggestions[0].plant_details.taxonomy
              .kingdom
          }
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Order:</AppText>
        <AppText>
          {
            props.route.params.data[0].suggestions[0].plant_details.taxonomy
              .order
          }
        </AppText>
        <AppText style={{ fontWeight: "bold" }}>Wiki Description:</AppText>
        <AppText>
          {
            props.route.params.data[0].suggestions[0].plant_details
              .wiki_description.value
          }
        </AppText>
        <TouchableOpacity onPress={handleReturn} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  imagess: { width: 100, height: 100 },
});

export default PlantImageInfo;
