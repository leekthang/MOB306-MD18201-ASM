import { Pressable, StyleSheet, Text, View, Image , ScrollView } from "react-native";
import React from "react";

const Information = (props) => {
  const { navigation } = props;

  const ClickStore = () => {
    navigation.navigate("Store");
  };

  const ClickHome =  (props) => {
    navigation.navigate("Home");
  };

  return (

    <ScrollView>
    <View style={styles.container}>

        
      
      <View style={styles.containerimg}>
        <Pressable>
        <Image
            style={styles.containerimg}
            source={require("./image/user.png")}
          />
        </Pressable>
        <Text style={styles.title}>Information</Text>
        
      </View>

      <View style={styles.textAll}>
        <Text style={styles.text}>Name : Lê Khắc Thắng</Text>
       </View> 

       <View style={styles.textAll}>
      <Text style={styles.text2}>MSV : PH19992</Text>
      </View>


<View style={styles.textAll}>
      <Text style={styles.text}>Email: thanglkph19992@fpt.edu.vn</Text>
      </View>

      <View style={styles.textAll}>
      <Text style={styles.text}>SDT : 0867968100</Text>
      </View>
      


       
      <View style={styles.viewButton}>


<Pressable style={styles.button} onPress={ClickHome}>
<Text style={styles.title1}> HOME</Text>
          <Image
            style={styles.img}

            source={require("./image/user.png")}
          />
          
        </Pressable>


        <Pressable style={styles.button} onPress={ClickStore}>
          <Text style={styles.title1}>STORE </Text>
          <Image
            style={styles.imgbutton}
            source={require("./image/shop.png")}
          />
          
        </Pressable>





        {/*  */}

        <Pressable style={styles.button} onPress={ClickHome}>
<Text style={styles.title1}> HOME</Text>
          <Image
            style={styles.img}

            source={require("./image/user.png")}
          />
          
        </Pressable>


        <Pressable style={styles.button} onPress={ClickStore}>
          <Text style={styles.title1}>STORE </Text>
          <Image
            style={styles.imgbutton}
            source={require("./image/shop.png")}
          />
          
        </Pressable>



        
      </View>
    </View>

    </ScrollView>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginStart: 5,
    marginEnd: 5,
    flexDirection: "column",
    paddingHorizontal : 19,
    
  },
  containerimg: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    
    marginTop: 20,
    textAlign: "center",
    fontSize: 40,
    textTransform : 'uppercase',  // tạo form chữ mới 
    marginBottom : 8,
    fontWeight :'700' // in đậm chữ 
    
  },
  img: {
    width:64,
        height:64,
        
  },

  textAll: {
   paddingTop :5,

    marginVertical :10 ,
  },
  text: {
    
    alignItems: 'center', // căn giữa
    padding : 16,
    borderRadius : 10,
    backgroundColor : '#FFF',
    shadowColor : '#000', 
    shadowOpacity :0.3 ,
    shadowRadius :10,
    textShadowOffset:{width : 0 , height : 0}, // tạo viền bên ngoài có màu đen chìm xuống màn hình 
    fontSize : 20,
  },

  text2: {
    alignItems: 'center', // căn giữa
    padding : 16,
    borderRadius : 10,
    backgroundColor : '#FFF',
    shadowColor : '#000', 
    shadowOpacity :0.3 ,
    shadowRadius :10,
    textShadowOffset:{width : 0 , height : 0}, // tạo viền bên ngoài có màu đen chìm xuống màn hình 
    fontSize : 20,
  },

  text3: {
    alignItems: 'center', // căn giữa
    padding : 16,
    borderRadius : 10,
    backgroundColor : '#FFF',
    shadowColor : '#000', 
    shadowOpacity :0.3 ,
    shadowRadius :10,
    textShadowOffset:{width : 0 , height : 0}, // tạo viền bên ngoài có màu đen chìm xuống màn hình 
    fontSize : 20,
  },
  imgbutton: {
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

  title1 : {
    textTransform : 'uppercase',  // tạo form chữ mới 
  marginBottom : 8,
  // color : '#fff',
  fontWeight :'700' // in đậm chữ
   
},
});
