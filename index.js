function distanceFromHqInBlocks (dest) {
  if (dest > 42) {
    return dest - 42
  } else {
    return 42 - dest
  }
}

function distanceFromHqInFeet (dest) {
  return distanceFromHqInBlocks(dest) * 264;
}

function distanceTravelledInFeet (start, finish) {
  if (start > finish) {
    return (start - finish) * 264
  } else {
    return (finish - start) * 264
  }
}

function calculatesFarePrice (start, finish) {
  if (distanceTravelledInFeet(start, finish) <= 400) {
    return 0
  }
}
