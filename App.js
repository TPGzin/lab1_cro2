import React from 'react';
import { View, ScrollView, StyleSheet, Image, Pressable, Text, Alert } from 'react-native';
import Banner from './Components/Banner';
import Block from './Components/Block';
import Button from './Components/Button';
import { MyTheme,useTheme } from './Components/MyTheme';
import TextInput from './Components/TextInput';
Banner
Block
Button
MyTheme
TextInput
export default function App() {
  return (
    <MyTheme>
     {/* Khu vực này là nội dung của ứng dụng */}
     <BodyApp/>
   </MyTheme>


  );
}
const BodyApp = ()=>{
  // sử dụng hook để thao tác với theme
  const {theme, toggleTheme } = useTheme();
  return(
      <View style={[styles.khung, {backgroundColor: theme==='light'?'#fff':'#000'}]}>
          <ScrollView style={[styles.container, {backgroundColor: theme==='light'?'#fff':'#000'}]}>
     
     <Banner />
     
     <Block title="Thông tin cá nhân">
       <TextInput placeholder="Họ và tên" />
       <TextInput placeholder="Email" keyboardType="email-address" />
       <TextInput placeholder="Số điện thoại" keyboardType="phone-pad" />
     </Block>
     
     <Block title="Thông tin khóa học">
       <TextInput placeholder="Tên khóa học" />
       <TextInput placeholder="Thời gian học" />
     </Block>
     
     <Block title="Thông tin liên hệ">
       <TextInput placeholder="Địa chỉ" />
       <TextInput placeholder="Ghi chú thêm" multiline />
     </Block>
     
     <Pressable onPress={() => Alert.alert('Đăng ký thành công!')} 
     title='Đăng Ký' style={[styles.btnTheme,{width:'95%',margin:10}]}>
     <Text style={styles.txtbtn}>
         Đăng ký
       </Text>
     </Pressable>
     <Button title='Đổi giao diện' onPress={toggleTheme} />
          </ScrollView>
          
      </View>
  );
 }
 

const styles = StyleSheet.create({
  khung:{
    flex:1,

  },
 
  btnTheme:{
    backgroundColor:'red',
    width:150,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:5,
     
  },
  txtbtn:{
    color:'white',
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection:'column',
     
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
