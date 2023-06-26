import { BrowserRouter } from "react-router-dom";
import PlayersCard from ".";
import FontStyles from "../../assets/fonts/fonts";
import { Player } from "../../models/Player";

describe("<PlayersCard />", () => {
  it("should render players info correctly", () => {
    cy.fixture("player").then((playerJson) => {
      const players: Player = playerJson as Player;
      const order = 1;

      cy.mount(
        <BrowserRouter>
          <FontStyles />
          <PlayersCard player={players} order={order} />
        </BrowserRouter>
      );
    });
  });
});
