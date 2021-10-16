import {Dropbox} from '@src/components/Dropbox';
import {styled} from '@StitchesConfig';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Dropbox />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
});
