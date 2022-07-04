import React, { FC } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { CarouselData } from "../../interfaces/interfaces"
import CarouselHeader from "../Carousel/CarouselHeader"
import CarouselItem from './CarouselItem';


const Carousel: FC<CarouselData> = ({ title, items }) => {
  return (
    <View>
      <CarouselHeader title={title} />
      <ScrollView horizontal={true}>
        <CarouselItem items={items} title={title} />
      </ScrollView>
    </View>
  )

};

export default Carousel;

