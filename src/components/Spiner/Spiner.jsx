import { Triangle, Puff } from 'react-loader-spinner';
import { Wrapper } from './Spiner.styled';

export const Spiner = () => (
  <Wrapper>
    <Triangle
      height="80"
      width="80"
      color="#8f67d1"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </Wrapper>
);

export const SpinerDelete = () => (
  <Wrapper>
    <Puff
      height="15"
      width="15"
      radius={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    ;
  </Wrapper>
);
