import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import { ScreenMode } from '../pages/SigninPage';

const SigninForm = ({ onSwitchMode }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.grey[800]
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Welcome back
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Email</Typography>
              <TextField />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Password</Typography>
              <TextField type='password' />
            </Stack>
          </Stack>
          <Button
            variant='contained'
            size='large'
            sx={{
              bgcolor: colors.grey[800],
              "&:hover": {
                bgcolor: colors.grey[600]
              }
            }}
          >
          <Link to="/homepage">
          Sign in
          </Link>
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography>Don&apos;t have an account?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Sign up now
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

SigninForm.propTypes = {
  onSwitchMode: PropTypes.func.isRequired,
};

export default SigninForm;
