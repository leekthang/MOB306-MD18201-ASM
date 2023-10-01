import { Pressable, StyleSheet, Text, View, Image, Button ,ScrollView , TouchableOpacity} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home = (props) => {
  const { navigation } = props;

  const ClickInformation = () => {
    navigation.navigate("Information");
  };
  const ClickStore = () => {
    navigation.navigate("Store");
  };
  return (

    <ScrollView>
    
      
      <View style={styles.container}>
     
      <View style={styles.containerimg}>
        <Pressable>
          <Image style={styles.imglogo} source={require("./image/nha.png")} />
        </Pressable>
      </View>


      
  
      
      <View style={styles.viewButton}>

        <Pressable style={styles.button} onPress={ClickInformation}>
        <Text style={styles.title}>USER</Text>
          <Image
            style={styles.img}

            source={require("./image/user.png")}
          />
          
        </Pressable>




        <Pressable style={styles.button} onPress={ClickStore}>

        <Text style={styles.title}>STORE </Text>
          <Image style={styles.img} source={require("./image/shop.png")} />
          
        </Pressable>


{/*  */}


<Pressable style={styles.button} onPress={ClickInformation}>
<Text style={styles.title}>USER</Text>
          <Image
            style={styles.img}

            source={require("./image/user.png")}
          />
          
        </Pressable>




        <Pressable style={styles.button} onPress={ClickStore}>

        <Text style={styles.title}>STORE </Text>
          <Image style={styles.img} source={require("./image/shop.png")} />
          
        </Pressable>

        <Pressable style={styles.button} onPress={ClickInformation}>
        <Text style={styles.title}>USER</Text>
          <Image
            style={styles.img}

            source={require("./image/user.png")}
          />
          
        </Pressable>




        <Pressable style={styles.button} onPress={ClickStore}>

        <Text style={styles.title}>STORE </Text>
          <Image style={styles.img} source={require("./image/shop.png")} />
          
        </Pressable>

      </View>



      







      
    </View>
    
    
    </ScrollView>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems :'stretch',
    justifyContent :'center',
    paddingHorizontal : 19,
   
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 100,
    
    // sắp xếp theo chiều dọc
  },
  containerimg: {
    alignItems: 'center', // căn giữa
      padding : 16,
      borderRadius : 4,
      backgroundColor : '#FFF',
      shadowColor : '#000', 
      shadowOpacity :0.3 ,
      shadowRadius :10,
      textShadowOffset:{width : 0 , height : 0}, // tạo viền bên ngoài có màu đen chìm xuống màn hình 

      marginVertical :15 ,
  },
  // containertext: {
  //   marginTop: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  // text: {
  //   textTransform : 'uppercase',  // tạo form chữ mới 
  //     marginBottom : 8,
  //     fontWeight :'700' // in đậm chữ 
  // },
  // t: {
  //   fontSize: 18,
  //   fontWeight: "normal",
  // },

  title : {
    textTransform : 'uppercase',  // tạo form chữ mới 
  marginBottom : 8,
  fontWeight :'700' ,// in đậm chữ 
  justifyContent : 'center'
},


  imglogo: {
    borderRadius: 25,
    width: 150,
    height: 150,
  },
  img: {
    width:64,
        height:64
  },
  button: {
    
    alignItems: 'center', // căn giữa
    padding : 16,
    borderRadius : 4,
    backgroundColor : '#FFF',
    shadowColor : '#000', 
    shadowOpacity :0.3 ,
    shadowRadius :10,
    textShadowOffset:{width : 0 , height : 0}, // tạo viền bên ngoài có màu đen chìm xuống màn hình 

    marginVertical :15 ,
  },
  viewButton: {
    marginTop: 16,
    
  },
});
