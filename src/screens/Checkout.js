import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../components/Images";
import { Items } from "../components/Items";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const Checkout = () => {
  const [Cart, setCart] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  //      useEffect(() => {
  //     getData("Cart").then((data) => {
  //       setCart(data || []);
  //     });
  //   }, []);

  // useEffect(() => {
  //     let price = 0;
  //     for (let i = 0; i < Cart.length; i++) {
  //       if (Cart) {
  //         price += Cart[i].price;
  //         setSum(price);
  //       } else {
  //         setSum(0);
  //       }
  //     }
  //   }, [Cart]);

  const cartRemover = (id) => {
    const updatedCart = Cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    storeData("Cart", updatedCart);
  };

  return <>fdkfhdf</>;
};
