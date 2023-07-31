import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "usehooks-ts";

import {
  PlayedGamesComponent,
  GamesHistoryComponent,
  VictoriesComponent,
  TimerComponent,
} from "../../components";
import { RESPONSIVE_SIZE } from "../../constants";
import { isPlayerWon } from "../../utils";

export type StatsComponentProps = {
  gamesHistory: number[];
};

/**
 * @description Stats component
 * @param {Array} gamesHistory
 * @returns {JSX}
 */
const StatsComponent: React.FC<StatsComponentProps> = ({ gamesHistory }) => {
  // Time for total game
  const [totalGameTime, setTotalGameTime] = useState<number>(0);
  // Start or pause the total game time
  const [totalGameTimeIsRunning, setTotalGameTimeIsRunning] =
    useState<boolean>(false);
  // When we load for the first time then we will start the game time
  useEffect(() => {
    setTotalGameTimeIsRunning(true);
  }, []);
  // If one player win then we will pause the total game timer
  useEffect(() => {
    if (isPlayerWon(gamesHistory)) {
      setTotalGameTimeIsRunning(false);
    }
  }, [gamesHistory]);
  // Check the width of the screen
  const { width } = useWindowSize();
  return (
    <div className="ttt-stats" data-testid="ttt-stats">
      <div className="ttt-row">
        <span className="ttt-title">Stats</span>
      </div>
      <div className="ttt-row victories">
        <span className="ttt-subtitle">Victories %</span>
        <VictoriesComponent gamesHistory={gamesHistory} />
      </div>
      {width > RESPONSIVE_SIZE ? (
        <div className="ttt-row games">
          <div className="ttt-row played-games">
            <span className="ttt-subtitle">Played Games</span>
            <PlayedGamesComponent numberGames={gamesHistory.length - 1} />
          </div>
          <div className="ttt-row games-history">
            <span className="ttt-subtitle">Games History</span>
            <GamesHistoryComponent gamesHistory={gamesHistory} />
          </div>
        </div>
      ) : (
        <>
          <div className="ttt-row played-games">
            <span className="ttt-subtitle">Played Games</span>
            <PlayedGamesComponent numberGames={gamesHistory.length - 1} />
          </div>
          <div className="ttt-row games-history">
            <span className="ttt-subtitle">Games History</span>
            <GamesHistoryComponent gamesHistory={gamesHistory} />
          </div>
        </>
      )}
      <div className="ttt-row">
        <span className="ttt-subtitle">Total play time</span>
        <TimerComponent
          time={totalGameTime}
          setTime={setTotalGameTime}
          timeIsRunning={totalGameTimeIsRunning}
        />
      </div>
    </div>
  );
};

StatsComponent.propTypes = {
  gamesHistory: PropTypes.array.isRequired,
};

StatsComponent.defaultProps = {
  gamesHistory: [],
};

export { StatsComponent };
