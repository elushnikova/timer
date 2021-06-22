import { animated } from "react-spring";
import SettingsButton from "../SettingsButton/SettingsButton";
import preset from "../Timer/utils/preset";
import classes from "./Settings.module.scss";

function Settings({ styles }) {
  return (
    <animated.div className={classes.block} styles={styles}>
      <ul className={classes.list}>
        <li>
          <SettingsButton time={preset.fiveSec}>5 сек</SettingsButton>
        </li>
        <li>
          <SettingsButton time={preset.oneMin}>1 мин</SettingsButton>
        </li>
        <li>
          <SettingsButton time={preset.fiveMin}>5 мин</SettingsButton>
        </li>
        <li>
          <SettingsButton time={preset.tenMin}>10 мин</SettingsButton>
        </li>
        <li>
          <SettingsButton time={preset.fifteenMin}>15 мин</SettingsButton>
        </li>
      </ul>
    </animated.div>
  );
}

export default Settings;
