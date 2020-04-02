export const hold = (node, [start, end]) => {
  node.addEventListener("mousedown", start);
  node.addEventListener("mouseup", end);
  node.addEventListener("mouseout", end);
  node.addEventListener("touchstart", start);
  node.addEventListener("touchend", end);

  return {
    destroy() {
      node.removeEventListener("mousedown", start);
      node.removeEventListener("mouseup", end);
      node.removeEventListener("mouseout", end);
      node.removeEventListener("touchstart", start);
      node.removeEventListener("touchend", end);
    }
  };
};
