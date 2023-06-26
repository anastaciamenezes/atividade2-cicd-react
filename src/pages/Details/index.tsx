import { useLocation, useNavigate } from "react-router-dom";
import { Player } from "../../models/Player";
import {
  BackButton,
  DetailsContainer,
  DetailsList,
  DetailsPanel,
  DetailsPanelTitle,
  DetailsTitle,
} from "./styles";

type Location = {
  state: {
    player: Player;
  };
};

const Details = () => {
  const location: Location = useLocation();
  const { player } = location.state;
  const navigate = useNavigate();

  return (
    <DetailsContainer>
      <DetailsTitle data-cy="details-title">
        Player: {player.first_name} {player.last_name}
      </DetailsTitle>

      {player.last_name.length > 0 && (
        <DetailsPanel data-cy="player-panel">
          <DetailsPanelTitle>National Basketball Association - NBA</DetailsPanelTitle>
          <DetailsList data-cy="details-list">
            <p>
              Time: {player.team_name} 
            </p>
            <p>
              Position: {player.position}
            </p>
          </DetailsList>
        </DetailsPanel>
      )}
      <BackButton data-cy="back-button" onClick={() => navigate("/")}>
        Voltar
      </BackButton>
    </DetailsContainer>
  );
};

export default Details;
