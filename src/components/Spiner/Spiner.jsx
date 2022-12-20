import { Triangle } from 'react-loader-spinner';
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
