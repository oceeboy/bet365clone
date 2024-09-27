import icons from "./icons";
import images from "./images";
import teamIcon from "./teamIcon";

export { icons, images, teamIcon };

export const mockData = [
  {
    id: "1",
    icon: icons.baseball,
    subheader: "Money Line",
    description: "BOOSTED 3 LEG PARALAY",
    betOptions: [
      "WAS Nationals (v COL Rockies)",
      "NY Yankees (v CLE Guardians)",
      "STL Cardinals (v MIL Brewers)",
    ],
    oddsupdated: 5.43,
    odds: 4.83,
    oddtype: "decimal",
  },
  {
    id: "2",
    icon: icons.baseball,
    subheader: "Player Hits Milestones",
    description: "BOOSTED 3 LEG PARALAY",
    betOptions: [
      "Aaron Judge: 1+ Hits (CLE Guardians @ NY yankees)",
      "William Contreras: 1+ Hits (MIL Brewers @ STL Cardianls)",
      "Yordan Alvarez: 1+ Hits (HOU Astros @ BAL Orioles)",
    ],
    oddsupdated: 3.06,
    odds: 2.84,
    oddtype: "american",
  },
  {
    id: "3",
    icon: icons.baseball,
    description: "Pitcher Strikeouts Milestones",
    subheader: "BOOSTED 3 LEG PARALAY",
    betOptions: [
      "Gerrit Cole: 7+ Strikeouts (CLE Guardians @ NY Yankees)",
      "Corbin Burnes: 7+ Strikeouts (HOU Astros @ BAL Orioles",
    ],
    oddsupdated: 4,
    odds: 3,
    oddtype: "american",
  },

  {
    id: "4",
    icon: icons.golf,
    subheader: "Same Game Play",
    description: "Another Boost",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: 7,
    odds: 4,
    oddtype: "american",
  },
  {
    id: "5",
    icon: icons.criket,
    subheader: "Same Game Play",
    description: "Final Boost",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: 6,
    odds: 5.2,
    oddtype: "decimal",
  },
];

export const mlbGameData = [
  {
    id: "1",
    dateTime: "Today 1:05 PM",
    liveIcon: icons.ticketliveplay,
    boostCount: 6,
    boostIcon: icons.ticketarrowboost,
    team1: {
      icon: teamIcon.CLEGuardians,
      name: "CLE Guardians",
    },
    team2: {
      icon: teamIcon.TORBlueJays,
      name: "TOR Blue Jays",
    },
    odds: [
      { number: 1, value: "+230" },
      { number: 2, value: "+400" },
    ],
  },
  // Add more items as needed
  {
    id: "2",
    dateTime: "Today 7:00 AM",
    liveIcon: icons.ticketliveplay,
    boostCount: 6,
    boostIcon: icons.ticketarrowboost,
    team1: {
      icon: teamIcon.CLEGuardians, // Example path
      name: "CLE Guardians",
    },
    team2: {
      icon: teamIcon.TORBlueJays, // Example path
      name: "TOR Blue Jays",
    },
    odds: [
      { number: 1, value: "+230" },
      { number: 2, value: "+230" },
    ],
  },
];

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
