import AsyncStorage from "@react-native-async-storage/async-storage";

export const totalSum = async () => {
  try {
    // Retrieve the value associated with the key "Cart" from AsyncStorage
    const jsonValue = await AsyncStorage.getItem("Cart");

    // Parse the JSON string into a JavaScript object
    const data = JSON.parse(jsonValue);

    // Calculate the total sum of prices in the cart
    const total = data.reduce((sum, item) => sum + item.price, 0);

    // Log the total sum to the console
    console.log(total);
  } catch (e) {
    // Log any errors that occur during the try block
    console.log(e);
  }
};
