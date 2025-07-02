import React, { useState } from 'react';
import ModalLib from 'react-native-modal';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import * as styles from './style';

export const Modal = () => {
  const [isVisible, setIsVisible] = useState(true); // Defina como true pra ver o modal direto

  return (
    <styles.Container>
      <ModalLib
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        animationIn="zoomIn"
        animationOut="zoomOut"
        useNativeDriver
      >
        <styles.ModalCard>
          <styles.Title>Lofi Flow</styles.Title>

          <styles.CoverImage
            source={require('../../assets/images/lofi-night.png')} // Coloque a imagem no caminho correto
            resizeMode="cover"
          />

          <styles.SongTitle>Night Vibes</styles.SongTitle>
          <styles.Subtitle>NCS Release</styles.Subtitle>

          <styles.ButtonRow>
            <styles.ModalButton>
              <styles.ButtonText>Play</styles.ButtonText>
            </styles.ModalButton>
            <styles.ModalButton>
              <styles.ButtonText>Next</styles.ButtonText>
            </styles.ModalButton>
          </styles.ButtonRow>
        </styles.ModalCard>
      </ModalLib>
    </styles.Container>
  );
};
