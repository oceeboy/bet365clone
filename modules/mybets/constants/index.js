export const getBetType = (selections, stats) => {
  const count = selections.length;

  if (count === 1) return stats === "cashout" ? "Single" : "Singles";
  if (count === 2) return stats === "cashout" ? "Double" : "Doubles";
  return "Accumulator"; // For 3 or more events
};

const ticketInfo = {
  wager: 300,
  returnAmount: 61200,
  selections: [
    {
      event: "Gremio v Criciuma",
      dateTime: "Wed Sep 25 18:00",
      market: "Correct Score",
      selection: "Criciuma 2-1",
      odds: 12.0,
      status: "won",
    },
    {
      event: "Bragantino v Internacional",
      dateTime: "Wed Sep 25 18:00",
      market: "Correct Score",
      selection: "Draw 2-2",
      odds: 17.0,
      status: "won",
    },
  ],
  stats: "settled" /* either cashout or settled */,
  oddsType: "decimal",
};

export const betBalance = {
  balance: formatCurrency(64200),
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function formatNumber(value, formatType = "decimal") {
  if (formatType === "american") {
    // Handle American odds (moneyline odds)
    if (value >= 2.0) {
      return `+${((value - 1) * 100).toFixed(0)}`;
    } else if (value < 2.0 && value > 1.0) {
      return `-${(100 / (value - 1)).toFixed(0)}`;
    } else {
      return "Even"; // Typically used for decimal odds of 1.0, which is even money
    }
  } else if (formatType === "fractional") {
    // Handle Fractional odds
    const [numerator, denominator] = value.split("/");
    if (numerator && denominator) {
      return `${numerator}/${denominator}`;
    } else {
      return "Invalid fractional odds";
    }
  } else if (formatType === "decimal") {
    // Handle Decimal odds
    return value.toFixed(2);
  } else {
    return "Unknown format type";
  }
}

export { ticketInfo, formatCurrency, formatNumber };

function calReturn() {
  return;
}
