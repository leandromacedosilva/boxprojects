function flipCard(card) {
  card.style.transform =
    card.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
}
