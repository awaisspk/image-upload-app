import {styled} from '@StitchesConfig';
import Image from 'next/image';
import imagesrc from '../../../public/image.svg';

export const DropArea = () => {
  return (
    <Container>
      <Imagecontainer>
        <Image src={imagesrc} alt="drop image placeholder" priority />
      </Imagecontainer>
      <p>Drag and Drop your image here</p>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$accent',
  padding: '2em 1.5em',
  width: '100%',
  border: 'dashed 1px #97BEF4',
  borderRadius: '0.5em',

  '& p': {
    fontSize: '0.7rem',
    paddingTop: '10px',
    color: '$typefacePrimary',
    opacity: '0.3',
  },
});

const Imagecontainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '10px',

  '& img': {
    width: '120px',
    height: '90px',
  },
});
