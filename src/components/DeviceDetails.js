import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StyledCheckbox from './StyledCheckbox'
import './Devices.css'
const rows = [
  {
    icon:require("../assets/images/morning-wh.png"),
    title:'Morning',
    percentage:'50%'
  },
  {
    icon:require("../assets/images/day-dk.png"),
    title:'Day',
    percentage:'30%'
  },
  {
    icon:require("../assets/images/night-dk.png"),
    title:'Night',
    percentage:'100%'
  },
]
const AntSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 24,
    padding: 0,
    float: "right"
  },
  switchBase: {
    padding: 1,
    color: theme.palette.grey[500],
    left: 4,
    top:4,
    "&$checked": {
      transform: "translateX(18px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#000",
        borderColor: "#000"
      }
    }
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: "none"
  },
  track: {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: '#ccc'
  },
  checked: {}
}))(Switch);

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  plusIcon: {
    backgroundImage: "linear-gradient(-135deg, #DEFFC9 0%, #A3F8FF 100%)",
    boxShadow: "0 15px 30px 0 rgba(234,252,223,0.40)",
    float: "right",
    padding: 10,
    marginTop: 11,
    borderRadius: "unset"
  },
  deviceName: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: "#000",
    letterSpacing: 5.12,
    textShadow: "0 20px 25px rgba(0,0,0,0.15)"
  }


}));

export default function DeviceDetails(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const progressBar = event => {
    var rect = myProgress.current.getBoundingClientRect();
    var leftX = rect.left;
    var rightX = rect.right;
    var diffX = rightX-leftX;
    let curDiffX=event.clientX-rect.left
    var parcentageX = Math.round(100*(curDiffX)/diffX);
      if(parcentageX<=100){
      myBar.current.style.transform = "rotate("+ (45+(parcentageX*1.8)) +"deg)";
      percentageVal.current.innerHTML = parcentageX;
      }
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  let myProgress = React.createRef();
  let myBar = React.createRef();
  let percentageVal = React.createRef();
  const [curRow, setCurRow] = useState('Morning');

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography component="div">
        <Box fontWeight="fontWeightLight" mb={9} className="devices">
          Devices
          <Button className={classes.plusIcon}>
            <img src={require("../assets/images/plus-dk.png")} alt="" />
          </Button>
        </Box>
        <Box fontWeight="fontWeightLight" mb={9} className={classes.deviceName}>
          {props.details.name}
          <AntSwitch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
          />
        </Box>
        {/* <div className="sidebarIconImg">
          <img src={require("../assets/images/chevron-right.png")} alt="" />
        </div> */}
        <Box fontWeight="fontWeightLight" mb={3} className="shades">
        SHADES
        </Box>
        <Box mb={3} className="shadeItems">
          <Grid container spacing={3}>
            <Grid item md={2} >
              <StyledCheckbox backgroundclr="#FF4563" defaultChecked />
            </Grid>
            <Grid item md={2} >
              <StyledCheckbox backgroundclr="#8245E6"/>
            </Grid>
            <Grid item  md={2} >
                <StyledCheckbox backgroundclr="#4AC0E0"/>
            </Grid>
            <Grid item md={2} >
              <StyledCheckbox backgroundclr="#1089EB"/>
            </Grid>
            <Grid item  md={2} >
              <StyledCheckbox backgroundclr="#C791CD"/>
            </Grid>
          </Grid>
        </Box>
        <Box fontWeight="fontWeightLight" mb={3} className="shades">
        Mode
        </Box>
        <Box mb={2}>
          <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.title}
                    onClick={() => setCurRow(row.title)}
                    className={curRow===row.title && "selectedRow"}>
                      <TableCell component="td" >
                          <img src={row.icon} alt="" />
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.percentage}</TableCell>
                      <TableCell align="center">
                      <img src={curRow===row.title ?
                       require("../assets/images/tick-wh.png")
                     : require("../assets/images/tick-wh-lt.png")} alt="" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
        </Box>
        <Box fontWeight="fontWeightLight" mb={2} className="shades">
        INTENSITY
        </Box>
        <Box mb={4}>
        <Grid>
          <div className="barOverflow" ref={myProgress} id="myProgress" onClick={progressBar}>
            <div className="bar" id="myBar" ref={myBar}></div>
            <div ref={percentageVal} id="percentageVal">65</div>
          </div>
          </Grid>
        </Box>
      </Typography>
    </Container>
  );
}
