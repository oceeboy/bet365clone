const ticketInfo = {
  wager: 400,
  return: 20400,
  ticketInfo: [
    {
      selectedInfo: "Draw 0-0",
      bookingsInfo: "Correct Score",
      odds: 5.1,
      teamInfo: "Chapecoense v CRB",
    },
    {
      selectedInfo: "Vila Nova 1-0",
      bookingsInfo: "Correct Score",
      odds: 10.0,
      teamInfo: "Vila Nova PR v America MG",
    },
  ],
  status: "won",
  type: "Doubles",
  oddtype: "decimal",
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
