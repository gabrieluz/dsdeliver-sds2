
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {fetchOrders} from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading]= useState(false)
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const fetchData = () => {
    setIsLoading(true)
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Tivemos algum problema com o seu pedido'))
      .finally(()=> setIsLoading(false))
  }

  useEffect(()=>{
    if(isFocused)
      fetchData()
  }, [isFocused])

  const handleOnPress = (order: Order) =>{
    navigation.navigate('OrderDetails', {
      order
    })
  }
  return (
    <>
      <Header />
      <ScrollView style={styles.container} >
        {isLoading ? (
          <Text>Buscando Seus Pedidos</Text>
        ):(
          orders.map(order =>{
            <TouchableWithoutFeedback onPress={()=> handleOnPress(order)} key={order.id}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          })
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: '5%',
    paddingLeft: '5%'
  }
});
