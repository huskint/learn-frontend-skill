import React from 'react';
import { useParams } from 'react-router';

const GugudanPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      구구단 페이지 id: {id}
    </>
  );
};

export default GugudanPage;
