import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import NoRobotTile from "./components/NoRobotTile";
import Button from "@material-ui/core/Button";
import RobotTile from "./components/RobotTile";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "48px",
    color: "#006767",
    width: "450px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  mainWrapper: {
    display: "flex",
    width: "930px",
    marginTop: "10px",
    marginLeft: "20px"
  },
  tileWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "600px"
  },
  tile: {
    marginRight: "20px",
    marginBottom: "16px"
  },
  controlsWrapper: {
    display: "inline",
    width: "330px",
    height: "574px",
    border: "1px solid #33a4a6",
    borderRadius: "12px"
  },
  buttonControl: {
    width: "160px",
    height: "48px",
    marginTop: "12px",
    marginLeft: "12px",
    backgroundImage: "linear-gradient(225deg, #2E739E 0%, #32806E 100%)",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.20)",
    borderRadius: "24px",
    "&.MuiButton-root:hover": {
      transition: "none",
      backgroundImage: "none",
      backgroundColor: "#32806E",
      border: "3px solid #32806E"
    }
  },
  buttonControlText: {
    fontFamily: "Helvetica",
    fontSize: "17px",
    color: "#FFFFFF",
    letterSpacing: "-0.39px",
    textAlign: "center",
    lineHeight: "22px",
    textTransform: "none"
  },
  placeWrapper: {
    display: "flex"
  },
  textField: {
    width: "38px",
    height: "38px",
    marginTop: "16px",
    marginLeft: "10px"
  },
  messageWrapper: {
    width: "330px",
    height: "240px"
  }
}));

function App() {
  const classes = useStyles();
  const [axisX, setAxisX] = useState();
  const [axisY, setAxisY] = useState();
  const [moveToX, setMoveToX] = useState();
  const [moveToY, setMoveToY] = useState();
  const [face, setFace] = useState();
  const [placed, setPlaced] = useState(false);

  const Tile = (x, y) => {
    if (x === moveToX && y === moveToY && placed) {
      return <RobotTile key={`${x}${y}`} />;
    } else {
      return <NoRobotTile key={`${x}${y}`} />;
    }
  };

  const tileGrid = () => {
    let gridTile = [];
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        gridTile.push(<div className={classes.tile}>{Tile(x, y)}</div>);
      }
    }
    return gridTile;
  };

  const handlePlaced = () => {
    setMoveToX(parseInt(axisX));
    setMoveToY(parseInt(axisY));
    setPlaced(true);
  };

  const handleChangeX = event => {
    setAxisX(parseInt(event.target.value));
  };

  const handleChangeY = event => {
    setAxisY(parseInt(event.target.value));
  };

  const handleChangeFace = event => {
    setFace(event.target.value);
  };

  return (
    <div className="App">
      <Typography className={classes.title}>Toy Robot Simulator</Typography>
      <div className={classes.mainWrapper}>
        <div>
          <div className={classes.tileWrapper}>{tileGrid()}</div>
        </div>
        <div className={classes.controlsWrapper}>
          <div className={classes.messageWrapper}></div>
          <div className={classes.placeWrapper}>
            <div>
              <Button
                  variant="outlined"
                  className={classes.buttonControl}
                  onClick={handlePlaced}
              >
                <Typography className={classes.buttonControlText}>
                  Place
                </Typography>
              </Button>
            </div>
            <TextField
              id="outlined-x"
              label="X"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              value={axisX}
              onChange={handleChangeX}
            />
            <TextField
              id="outlined-y"
              label="Y"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              value={axisY}
              onChange={handleChangeY}
            />
            <TextField
              id="outlined-f"
              label="F"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              value={face}
              onChange={handleChangeFace}
            />
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonControl}>
              <Typography className={classes.buttonControlText}>
                Move
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonControl}>
              <Typography className={classes.buttonControlText}>
                Left
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonControl}>
              <Typography className={classes.buttonControlText}>
                Right
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonControl}>
              <Typography className={classes.buttonControlText}>
                Report
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
