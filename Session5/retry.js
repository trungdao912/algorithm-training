class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let condition = true;

  while (condition) {
    try {
      return primitiveMultiply(a, b);
    }
    catch {
      continue;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
