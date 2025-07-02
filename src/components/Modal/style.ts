import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #1e1b2e;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.View`
  background-color: #26233b;
  padding: 24px;
  border-radius: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CoverImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const SongTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #ffffffb3;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #2e2b45;
  padding: 10px 24px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export default styled;
