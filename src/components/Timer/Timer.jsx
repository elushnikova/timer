import { second } from './utils/preset';
import {
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from './utils/lib';
import styles from './Timer.module.scss';
import useTimerContext from '../../hooks/useTimerContext';
import useGetQuerySecondsEffect from '../../hooks/useGetQuerySecondsEffect';
import useStartTimerEffect from '../../hooks/useStartTimerEffect';

function Timer() {
  const { time } = useTimerContext();

  useGetQuerySecondsEffect();
  useStartTimerEffect();

  return (
    <>
      {Boolean(time) && (
        <div
          className={`${styles.block} ${lessThanMinute(time) && styles.single}`}
        >
          {!lessThanMinute(time) && (
            <>
              <span className={styles.minutes}>
                {padNumber(truncate(divideByMinute(time)))}
              </span>
              <span className={styles.separator}>:</span>
            </>
          )}

          <span className={styles.seconds}>
            {lessThanTenSec(time)
              ? moduloByMinute(time) / second
              : padNumber(moduloByMinute(time) / second)}
          </span>
        </div>
      )}
    </>
  );
}

export default Timer;