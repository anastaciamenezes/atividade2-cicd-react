import { useLocation, useNavigate } from "react-router-dom";
import { Player } from "../../models/Player";
import { BackButton, DetailsContainer, DetailsTitle } from "./styles";

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
        Informações sobre {player.first_name}
      </DetailsTitle>

      <BackButton data-cy="back-button" onClick={() => navigate("/")}>
        Voltar
      </BackButton>
    </DetailsContainer>
  );
};

export default Details;
