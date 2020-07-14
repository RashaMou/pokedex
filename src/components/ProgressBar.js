import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * Pokemon stat values are between 0 - 255, and MaterialUI progress bars only accept ranges from 1-100.
 * This function transforms a Pokemon stat value to a scale of 0 - 100 so it can be rendered correctly
 * in the progress bar.
 */
const normalizeStat = (value) => ((value - 0) * 100) / (255 - 0);

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        variant='determinate'
        value={normalizeStat(props.stat)}
      />
    </div>
  );
}
