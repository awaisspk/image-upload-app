import {styled} from '@StitchesConfig';

// there variants submit , copy link on success and back to home page
export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$main',
  padding: '0.7rem 1rem',
  color: '$fg',
  borderRadius: '0.5em',
  fontSize: '0.8rem',
  marginTop: '1rem',

  '& :active': {
    opacity: 0.8,
  },

  '& :hover': {
    opacity: 0.8,
  },

  variants: {
    varient: {
      copy: {
        padding: '0.5rem',
      },
    },
  },
});
