module.exports = {
  format_ts_date: (ts) => {
    const date = new Date (ts)
      return date.toLocaleString();
    },
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
};
