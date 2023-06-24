import { Player } from "../../models/Player";
import {
  PlayersCardPanel,
  PlayersDetailsLink,
  PlayersDetailsText,
  PlayersTitle,
} from "./styles";

type Props = {
  order: number;
  player: Player;
};

const PlayersCard = ({ order, player }: Props) => {
  return (
    <PlayersCardPanel data-cy="">
      <PlayersTitle data-cy="">{`${order} - ${player.first_name}`}</PlayersTitle>
      <PlayersDetailsLink to="/details" state={{ player }}>
        <PlayersDetailsText data-cy="">{player.first_name}</PlayersDetailsText>
      </PlayersDetailsLink>
    </PlayersCardPanel>
  );
};

export default PlayersCard;
