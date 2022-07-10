const getEaseOutExpo = (t: number, d: number) => {
  return t > d ? 1 : -Math.pow(2, (-10 * t) / d) + 1
}

export default getEaseOutExpo
