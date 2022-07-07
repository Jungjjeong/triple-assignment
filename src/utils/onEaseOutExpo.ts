const onEaseOutExpo = (t: number, d: number) => {
  return t > d ? 1 : -Math.pow(2, (-10 * t) / d) + 1 + 0
}

// T: 경과한 시간
// b: 시작 값 (0)
// c: 변화 량 (1)
// d: 애니메이션에 소요되는 시간

export default onEaseOutExpo
