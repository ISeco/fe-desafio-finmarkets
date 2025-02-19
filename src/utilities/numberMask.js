export const formatNumber = (num) => {
  try {
    const finalNumber = parseFloat(num);
    if (isNaN(finalNumber)) return "0";
    if (Number.isInteger(finalNumber)) {
      return finalNumber
        .toLocaleString("es-ES")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return finalNumber
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  } catch (error) {
    return "0";
  }
};
