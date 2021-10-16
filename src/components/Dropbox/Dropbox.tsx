import {styled} from '@StitchesConfig';
import {Button} from '../Button';
import {DropArea} from '../DropArea';

export const Dropbox = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h4>upload your Image</h4>
          <p>File should be in Jpeg, Png...</p>
        </Header>
        <DropArea />
        <Button>Choose a file</Button>
      </Container>
    </Wrapper>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h4': {
    fontSize: '1.3rem',
    margin: '0.6em 0 0.5em 0',
  },
  '& p': {
    fontSize: '0.7rem',
    marginBottom: '1em',
  },
});

const Wrapper = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5em',
  backgroundColor: '$fg',
  borderRadius: '0.8em',
  boxShadow: '0 0 15px -10px rgba(0,0,0,0.4)',
  width: '90%',
  maxWidth: '500px',

  '@bp1': {
    padding: '2em',
  },
});
