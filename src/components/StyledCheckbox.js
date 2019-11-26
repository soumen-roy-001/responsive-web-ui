import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 32,
    height: 32,
    boxShadow: '0 27px 27px 0 rgba(0,0,0,0.15)',
    backgroundColor: props => props.backgroundclr,
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: props => props.backgroundclr    
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: props => props.backgroundclr,
    width: 48,
    height: 48,
    marginTop:'-6px',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      content: '""',
      margin:12,
      backgroundImage: `url(${require("../assets/images/tick-wh.png")})`
    },
    'input:hover ~ &': {
      backgroundColor: props => props.backgroundclr,
    },
  },
});

export default function StyledCheckbox(props) {
  const classes = useStyles(props);
  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}
