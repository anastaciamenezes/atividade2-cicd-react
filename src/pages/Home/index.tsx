import { CSSProperties, useCallback, useState } from "react";
import { ClockLoader } from "react-spinners";

import PlayersCard from "../../components/PlayersCard";
import { Player } from "../../models/Player";
import { PlayersService } from "../../services/PlayersService";
import {
  HomeContainer,
  NoResultsFoundMessage,
  ResultsFoundMessage,
  SearchButton,
  SearchInput,
  SearchPanel,
} from "./styles";

const playersService = new PlayersService();
const loadingCssOverride: CSSProperties = {
  margin: "10px auto",
};
const loadingColor = "#392e4a";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [noPlayersFound, setNoPlayersFound] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const searchPlayers = useCallback(async () => {
    if (filter) {
      setIsSearching(true);
      setNoPlayersFound(false);
      const playersFound = await playersService.findPlayers(filter);
      console.log(playersFound);
      setPlayers(playersFound);
      setFilter("");

      setIsSearching(false);
    }
  }, [filter]);

  return (
    <HomeContainer>
      <SearchPanel>
        <SearchInput
          data-cy=""
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          data-cy=""
          value="Buscar"
          disabled={isSearching}
          onClick={searchPlayers}
        />
      </SearchPanel>

      {isSearching && (
        <ClockLoader color={loadingColor} cssOverride={loadingCssOverride} />
      )}

      {!isSearching && players.length > 0 && (
        <>
          <ResultsFoundMessage>
            {players.length} resultado(s) encontrado(s)
          </ResultsFoundMessage>

          {players.map((p, index) => (
            <PlayersCard key={index} order={index + 1} player={p} />
          ))}
        </>
      )}

      {!isSearching && noPlayersFound && (
        <NoResultsFoundMessage>Nenhum jogador encontrado</NoResultsFoundMessage>
      )}
    </HomeContainer>
  );
};

export default Home;
