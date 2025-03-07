import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';
import images from '../../assets/images';
;

const index = () => {
  return (
    <View style={style.background}>
      <View
        style={{
          backgroundColor: '#EB8948',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <View style={style.iconBar}>
          <Image source={icons.arrow} style={style.iconArrow}></Image>
          <View style={style.Hearthiconcerceve}>
            <Image source={icons.hearth} style={style.iconHearth}></Image>
          </View>
        </View>
        <View style={style.iconBar2}>
          <View style={style.iceCreamİcon}>
            <Image source={images.iceCream} style={style.iceCreamİcon}></Image>
          </View>
          <View style={style.group2}>
            <View style={style.shopİconcerceve}>
              <Image source={icons.shop} style={style.shopİcon}></Image>
            </View>
            <View style={style.shopİconcerceve}>
              <Image source={icons.plus} style={style.iconPlus}></Image>
            </View>
            <View>
              <Text style={style.styleText}>$ 3.99</Text>
            </View>
            <View style={style.iconStarGroup}>
              <Image source={icons.star} style={style.iconStar}></Image>
              <Image source={icons.star} style={style.iconStar}></Image>
              <Image source={icons.star} style={style.iconStar}></Image>
              <Image source={icons.star} style={style.iconStar}></Image>
              <Image source={icons.star} style={style.iconStar}></Image>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={style.textbar23}>BLUE MOON POPSİCLE STİCK</Text>
        </View>
        <View>
          <Text style={style.urunAciklama}>
            İngiliz hızlı tüketim ürünleri şirketi Unilever, içinde plastik ve
            metal parçaları olabileceği endişesiyle İngiltere ve İrlanda'daki
            Magnum bademli dondurmaların toplatılması çağrısında bulundu.
            
          </Text>
        </View>
      </View>
      <View style={style.buttonBar}>
        <View style={style.button1}>
          <Text style={style.button1text}>View Ingredients</Text>
        </View>
        <View style={style.button2}>
          <Text style={style.button2text}>Order</Text>
        </View>
      </View>
      <View style={style.menuBar}>
        <Image source={icons.store} style={style.iconStore}></Image>
        <Image source={icons.gift} style={style.menuİcon}></Image>
        <Image source={icons.discount} style={style.menuİcon}></Image>
        <Image source={icons.user} style={style.menuİcon}></Image>
      </View>
      <View style={style.textBar}>
        <Text style={style.textStore}>Shop</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
