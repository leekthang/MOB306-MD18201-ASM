import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Switch,
  Button,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { API_USER } from "./api";
import * as ImagePicker from "expo-image-picker";

const Add = (props) => {
  const { navigation: nav, route } = props;
  const editData = props.route.params?.editData;
  // const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setAddress(editData.address);
      setPhone(`${editData.phone}`);
      setEmail(editData.email);
      setstatus(editData.status ? true : false);
    }
  }, [editData?.id]);

  // lưu
  const onSave = () => {
    const newObj = {
      name,
      address,
      email,
      phone: +phone,
      status: status ? 1 : 0,
    };
    fetch(!editData ? API_USER : `${API_USER}/${editData.id}`, {
      method: !editData ? "POST" : "PUT",
      body: JSON.stringify(newObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => nav.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Button title="upimage" />
      {image} */}

        <TextInput
          placeholder="    Name                                                                                    >   "
          style={styles.textInput}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />

        <TextInput
          placeholder="    Address                                                                                >   "
          style={styles.textInput}
          value={address}
          onChangeText={(text) => {
            setAddress(text);
          }}
        />

        <TextInput
          placeholder="    Email                                                                                     >   "
          style={styles.textInput}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          placeholder="    SDT                                                                                       >   "
          style={styles.textInput}
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
          keyboardType={"numeric"}
        />

        <View style={styles.switch}>
          <Text style={styles.text}>Status:</Text>
          <Switch value={status} onValueChange={() => setstatus(!status)} />
        </View>

        <View style={[styles.viewButton, { justifyContent: "space-evenly" }]}>
          <Pressable style={styles.button} onPress={() => onSave()}>
            <Text style={styles.title}>STORE </Text>
            <Image
              style={styles.img}
              source={require("./image/bookmark.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginStart: 5,
    marginEnd: 5,
    flexDirection: "column",
    paddingHorizontal: 19,
  },

  text: {
    marginLeft: 10,
    fontStyle: "italic",
    color: "#0099FF",
  },

  textInput: {
    height: 48,
    borderRadius: 5,

    margin: 4,
    marginVertical: 15,

    textShadowOffset: { width: 0, height: 0 },
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  viewButton: {
    marginTop: 16,
  },
  img: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center", // căn giữa
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 }, // tạo viền bên ngoài có màu đen chìm xuống màn hình
  },
  switch: {
    alignItems: "center",
    marginLeft: 0,
    flexDirection: "row",
  },
  title: {
    textTransform: "uppercase", // tạo form chữ mới
    marginBottom: 8,
    // color : '#fff',
    fontWeight: "700", // in đậm chữ
  },
});
