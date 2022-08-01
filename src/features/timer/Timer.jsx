import { second } from './utils/presets';
import {
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from './utils/lib';
import styles from './Timer.module.scss';
import useTimerContext from './useTimerContext';
import useQueryInputEffect from '../duration/useQueryInputEffect';
import useTimerEffect from './useTimerEffect';

function Timer() {
  const { time } = useTimerContext();

  useQueryInputEffect();
  useTimerEffect();

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
