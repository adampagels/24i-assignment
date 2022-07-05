import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { styles } from './BackButton.styles';

const BackButton = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
        <Image
          style={styles.backButtonImage}
          source={require('../../assets/images/backArrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
