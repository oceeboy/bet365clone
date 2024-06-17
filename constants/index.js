import icons from "./icons";
import images from "./images";
import teamIcon from "./teamIcon";

export { icons, images, teamIcon };

export const mockData = [
  {
    id: "1",
    icon: icons.soocerball,
    subheader: "Same Game Play",
    description: "Serbia v England",
    betOptions: [
      "Match result will be England",
      "Mosr Corners: England",
      "Most Shots on Target: England",
    ],
    oddsupdated: "+543",
    odds: "+473",
  },
  {
    id: "2",
    icon: icons.baseball,
    subheader: "Money Line",
    description: "Boosted 3 Leg Parlay",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: "+543",
    odds: "+473",
  },
  {
    id: "3",
    icon: icons.basketball,
    description: "Next Boost",
    subheader: "Same Game Play",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: "+543",
    odds: "+473",
  },
  {
    id: "4",
    icon: icons.golf,
    subheader: "Same Game Play",
    description: "Another Boost",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: "+543",
    odds: "+473",
  },
  {
    id: "5",
    icon: icons.criket,
    subheader: "Same Game Play",
    description: "Final Boost",
    betOptions: ["Bet Option 1", "Bet Option 2", "Bet Option 3"],
    oddsupdated: "+543",
    odds: "+473",
  },
];

export const data = [
  {
    id: "1",
    dateTime: "Sat 10:00 AM",
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
  // {
  //   id: "2",
  //   dateTime: "Sat 10:00 AM",
  //   liveIcon: icons.ticketliveplay,
  //   boostCount: 6,
  //   boostIcon: icons.ticketarrowboost,
  //   team1: {
  //     icon: teamIcon.CLEGuardians, // Example path
  //     name: "CLE Guardians",
  //   },
  //   team2: {
  //     icon: teamIcon.TORBlueJays, // Example path
  //     name: "TOR Blue Jays",
  //   },
  //   odds: [
  //     { number: 1, value: "+230" },
  //     { number: 2, value: "+230" },
  //   ],
  // },
];
