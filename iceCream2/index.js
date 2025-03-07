import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {icons} from '../../../assets';

const index = () => {
  return (
    <SafeAreaView style={style.background}>
      <View>
        <Image source={icons.arrow} style={style.iconArrow}></Image>
      </View>
      <View>
        <Text style={style.cartText}>My Cart</Text>
      </View>
      <View style={style.group1}>
        <Image source={icons.iceCream} style={style.iceCreamİcon}></Image>
        <View>
          <Text style={style.group1Text}>Blue Moon Popsicle Stick</Text>
        </View>
        <View style={style.Group2}>
         <View><Image source={icons.garbage} style={style.iconGarbage}></Image></View>
          <View style={style.buttonGroup}> 
            <Text>1</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
