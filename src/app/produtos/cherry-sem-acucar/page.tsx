import ProductPage from '../../components/ProductPage';
import React from 'react';

export default function CherrySemAcucar() {
  return (
    <ProductPage
      id="cherry-sem-acucar"
      title="CherryZ Sem Açúcar"
      imageSrc="/produto1.png"
      alt="CherryZ Sem Açúcar"
      description="Delicioso pirulito CherryZ com todo o sabor da cereja, mas sem açúcar! Perfeito para quem quer se cuidar sem abrir mão do prazer."
      characteristics={[
        "Sem açúcar",
        "Sabor cereja natural",
        "Zero calorias",
        "Adoçado com xilitol"
      ]}
      ingredients={[
        "Fruta desidratada em pó (cereja)",
        "Isomalte",
        "Xilitol",
        "Ácido ascórbico",
        "Ácido cítrico",
        "Extrato de urucum a base norbixina"
      ]}
      price="R$ 3,34"
    />
  );
}
