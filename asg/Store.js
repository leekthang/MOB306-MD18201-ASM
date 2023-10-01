import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { API_USER } from "./api";
import { useIsFocused } from "@react-navigation/native";

const Store = (props) => {
  const { navigation: nav, route } = props;
  const isFocused = useIsFocused;
  const [list, setList] = useState([]);

  // const ClickAdd = () => {
  //   nav.navigate("Add");
  // };

  const getStore = () => {
    fetch(API_USER)
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStore();
  }, [isFocused]);

  const onDelete = (deleteId) => {
    Alert.alert("Thông Báo !!!", "Bạn có Chắc chắn muốn xóa?", [
      {
        text: "OK",
        onPress: () => {
          fetch(`${API_USER}/${deleteId}`, { method: "DELETE" })
            .then((res) => {
              getStore();
            })
            .catch((err) => console.log(err));
        },
      },
      { text: "cencel", onPress: () => {} },
    ]);
  };

  const onEdit = (editId) => {
    Alert.alert("Thông Báo !!!", "Bạn Muốn Update ?", [
      {
        text: "OK",
        onPress: () => {
          fetch(`${API_USER}/${editId}`)
            .then((res) => res.json())
            .then((data) => nav.navigate("Add", { editData: data }));
        },
      },
      { text: "cencel", onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store manager</Text>

      <View style={styles.viewButton}>
        <Pressable style={styles.button} onPress={() => nav.navigate("Add")}>
          <Text style={styles.title1}>Thêm Mới </Text>
          <Image
            style={styles.imgbutton}
            source={require("./image/more2.png")}
          />
        </Pressable>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            {/* <Pressable>
              <Image
                style={styles.imglogoItem}
                source={{ uri: item.imglogoItem }}
              />
            </Pressable> */}

            <View style={styles.listview}>
              {/* <Text style={styles.textItem}>{item.id}</Text> */}
              <View style={styles.list}>
                <Text style={styles.textItem}>Name: {item.name}</Text>
              </View>

              <View style={styles.list}>
                <Text style={styles.textItem}>Address: {item.address}</Text>
              </View>

              <View style={styles.list}>
                <Text style={styles.textItem}>Email: {item.email}</Text>
              </View>

              <View style={styles.list}>
                <Text style={styles.textItem}>SDT: {item.phone}</Text>
              </View>

              <View style={styles.list}>
                <Text style={styles.textItem}>Status: {item.status}</Text>
              </View>
            </View>
            <View style={styles.update}>
              <Pressable style={styles.button2} onPress={() => onEdit(item.id)}>
                <Text style={styles.title1}>Update</Text>
                <Image
                  style={styles.imgbutton2}
                  source={require("./image/refresh.png")}
                />
              </Pressable>

              <Pressable
                style={styles.button2}
                onPress={() => onDelete(item.id)}
              >
                <Text style={styles.title1}>Delete</Text>
                <Image
                  style={styles.imgbutton2}
                  source={require("./image/delete.png")}
                />
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginStart: 5,
    marginEnd: 5,
    flexDirection: "column",
    paddingHorizontal: 19,
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 40,
    textTransform: "uppercase", // tạo form chữ mới
    marginBottom: 8,
    fontWeight: "700", // in đậm chữ
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

    marginVertical: 15,
  },
  imgbutton: {
    width: 60,
    height: 60,
  },

  imgbutton2: {
    width: 30,
    height: 30,
  },
  viewButton: {
    marginTop: 16,
  },
  textItem: {
    fontStyle: "normal",
    fontSize: 20,

    paddingTop: 7,
  },
  imglogoItem: {
    borderRadius: 25,
    width: 80,
    height: 100,
  },

  title1: {
    textTransform: "uppercase", // tạo form chữ mới
    marginBottom: 8,
    // color : '#fff',
    fontWeight: "700", // in đậm chữ
    fontSize: 17,
  },

  list: {
    padding: 16,
    borderRadius: 4,
    paddingTop: 1,

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 }, // tạo viền bên ngoài có màu đen chìm xuống màn hình

    marginVertical: 10,
  },

  listview: {
    paddingTop: 80,
  },
  button2: {
    alignItems: "center", // căn giữa
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 }, // tạo viền bên ngoài có màu đen chìm xuống màn hình

    marginVertical: 15,
  },
});
export default Store;
