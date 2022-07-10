<p align="center"><img src="https://user-images.githubusercontent.com/72294509/178151755-6993d441-6c52-48f0-a09d-ee67a0f2e1ec.gif" align="center" width="200px"></p>
<p align="center"><strong>트리플 홈페이지 Section 구현</strong></p>

<br/>

# 1️⃣ 프로젝트 실행 방법

- 배포 링크

[▶ 과제 배포 링크](https://triple-assignment-htc8fpaga-jungjjeong.vercel.app/)

<br/>

- 프로젝트 실행

```
npm i
```

```
npm run start
```

<br/>

- storybook 실행

```
npm run storybook
```

<br/><br/>

# 2️⃣ 사용 기술 및 선택한 이유

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br/>

- 요구사항에 따라 `React` 라이브러리를 사용했습니다.
  <br/><br/>

![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white)<br/>

- 여러 훅, 로직을 구현할 때 명시적으로 타입을 지정함으로써 오류를 방지할 수 있습니다.
- 백엔드와의 협업 개발 과정에서 미리 데이터 포맷 타입을 정의함으로써 커뮤니케이션 오류를 방지할 수 있습니다.

위와 같은 이유로 `TypeScript`를 공부하고 있으며, 해당 프로젝트에서 사용했습니다.
<br/><br/>

![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)<br/>

- 스토리북을 통해 컴포넌트, 훅의 정상 작동 또는 UI를 확인할 수 있습니다.
  <br/><br/>

![Emotion Styled](https://img.shields.io/badge/EmotionStyled-%237F5AB6?style=for-the-badge&logo=react&logoColor=white)<br/>

- `JS`와 `CSS` 사이에 상수, 함수를 쉽게 공유할 수 있습니다.
- `JavaScript` 환경을 최대한 활용할 수 있습니다. <br/>하지만 본 프로젝트에서는 스타일 파일이 길어짐에 따라 `component.tsx`파일의 가독성을 헤칠 것을 염려하여 `component.style.ts` 파일을 따로 생성하여 스타일을 정의했습니다.

프로젝트 내부 `AwardItem` 컴포넌트에서는 `props`를 활용한 `background-image` 조건부 스타일링을 적용했습니다.

```tsx
// AwardItem Component

const AwardItem = ({ organizationText, awardText, awardImage }: Props) => {
  return (
    <ItemContainer image={awardImage} className="statistic-section__AwardItem">
      {organizationText}
      <br />
      {awardText}
    </ItemContainer>
  )
}
```

```ts
// AwardItem.style.ts

interface Props {
  image: string
}

const ItemContainer = styled.div`
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 22px;
  background-image: url(${(props: Props) => props.image});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 54px 54px;
`
```

<br/>

![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)<br/>

- 린팅/포매팅 셋업은 요구사항에 맞게 `titicacadev/eslint-config-triple` 을 적용했습니다.
  <br/>

<br/><br/>

# 3️⃣ 추가 기재 사항

## 📁 초기 컴포넌트 단위 설계도

- 각 컴포넌트 내부의 반복되는 요소는 `~Item` 컴포넌트로 분리했습니다.

![Section Component 설계도](https://user-images.githubusercontent.com/72294509/177945450-cebfbef5-c6c7-4925-aa1d-24c92a2caf13.png)

<br/><br/>

## 📁 프로젝트 구조

### 참고사항

- 컴포넌트 단위별 디렉토리를 생성했습니다.
- 컴포넌트 단위별 디렉토리 내부에는 `index.ts`, `component.tsx`, `component.style.ts`, `component.stories.tsx` 파일이 각각 존재합니다.
- `assets`, `components`, `hooks`에는 각각 `index.ts` 파일을 정의하여 여러 파일들을 한번에 import 해올 수 있게 정리했습니다.

```tsx
// components/index.ts
export { default as Awards } from './Awards'
export { default as Logo } from './Logo'
export { default as Metrics } from './Metrics'
export { default as TripleSection } from './TripleSection'
```

<br/>

### 구조도

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂images           // 프로젝트에 사용된 이미지들
 ┃ ┗ 📜index.ts         // images 디렉토리 내부 파일들을 export
 ┣ 📂components         // 재사용 가능한 component들
 ┃ ┣ 📂Awards           // 1. Awards Component
 ┃ ┃ ┣ 📂AwardItem      // 1-1. Awards에 반복적으로 사용되는 AwardItem
 ┃ ┃ ┃ ┣ 📜AwardItem.style.ts
 ┃ ┃ ┃ ┣ 📜AwardItem.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜Awards.stories.tsx
 ┃ ┃ ┣ 📜Awards.style.ts
 ┃ ┃ ┣ 📜Awards.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Logo             // 2. Logo Component
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Logo.stories.tsx
 ┃ ┃ ┣ 📜Logo.style.ts
 ┃ ┃ ┗ 📜Logo.tsx
 ┃ ┣ 📂Metrics          // 3. Metrics Component
 ┃ ┃ ┣ 📂MetricItem     // 3-2. Metrics에 반복적으로 사용되는 MetricItem
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜MetricItem.style.ts
 ┃ ┃ ┃ ┗ 📜MetricItem.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Metrics.stories.tsx
 ┃ ┃ ┣ 📜Metrics.style.ts
 ┃ ┃ ┗ 📜Metrics.tsx
 ┃ ┣ 📂TripleSection    // 4. TripleSection Component -> Awards, Logo, Metrics Component를 조합한 컴포넌트
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜TripleSection.stories.tsx
 ┃ ┃ ┣ 📜TripleSection.style.ts
 ┃ ┃ ┗ 📜TripleSection.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂hooks              // 컴포넌트에 사용될 재사용 가능한 hook 함수들
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useCountUp.ts    // 1. MetricItem Component에 각각 사용된 useCountUp hook
 ┃ ┗ 📜useFadeIn.ts     // 2. Awards, Logo, Metrics Component에 사용된 useFadeIn hook
 ┣ 📂utils              // 재사용 가능한 일반 함수
 ┃ ┗ 📜onEaseOutExpo.ts // useCountUp hook 함수에 사용된 감속도 공식 함수
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

<br/><br/>

## ◼ 구현사항

### useCountUp hook

요구사항은 다음과 같습니다.

1. 각 숫자는 0부터 시작합니다.
2. 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
3. 증가 속도가 느려지는 효과를 구현해야 합니다.
4. React와 DOM API만을 이용해 구현해야 합니다

초기엔 `setInterval`을 사용하여 주기적으로 숫자가 올라가게 구현하였으나, 2번 요구사항을 만족할 수 없었습니다.
실행시간을 2000ms로 설정해놨음에도 불구하고, 실행 시간이 초과되는 문제가 발생했습니다.
이는 `setInterval`은 정확한 실행 시간을 보장하지 못하며, 프레임 소실 문제가 있기 떄문임을 알았습니다.

따라서 `requestAnimationFrame`을 사용한 방식으로 재구현했습니다. <br/>
숫자 증가가 점점 느려지는 효과는 `getEaseOutExpo` 함수를 따로 구현해 적용했습니다.

```ts
const getEaseOutExpo = (t: number, d: number) => {
  return t > d ? 1 : -Math.pow(2, (-10 * t) / d) + 1
}

export default getEaseOutExpo
```

MetricItem 컴포넌트의 `countUpAnimation` props를 받아 `useCountUp hook`을 사용합니다.
단위는 `ms`입니다.

```ts
// MetricItem Component 일부
const MetricItem = ({ countUpAnimation, unitText, planeText }: Props) => {
  const [count, setCount] = useState(0)
  const metricCount = useCountUp(
    countUpAnimation.startAt,
    countUpAnimation.endAt,
    countUpAnimation.duration,
  )

  useEffect(() => {
    setCount(metricCount)
  }, [metricCount])
  ...
```

<br/>

### useFadeIn hook

요구사항은 다음과 같습니다.

1. 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
2. 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용해야 합니다
3. 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.

inline style을 적용시키는 `useFadeIn hook`을 구현하여 각 컴포넌트에 fadeIn 효과를 적용했습니다.<br/>
각 컴포넌트에 `fadeInAnimation` props를 받아 `useFadeIn hook`을 사용할 수 있습니다.
단위는 `ms`입니다.

```ts
// Metrics Component 일부
const Metrics = ({ fadeInAnimation }: Props) => {
  const { ref, style } = useFadeIn(
    fadeInAnimation.duration,
    fadeInAnimation.delay,
  )
  ...
```

Fade in 스타일의 경우 트리플 홈페이지와 동일하게 `opacity: 0, transform: translateY(10px)` -> `opacity: 1, transform: translateY(0)`을 적용했습니다.

<br/>

### 컴포넌트 단위, props

재사용 가능한 단위로 컴포넌트 단위를 나눴습니다. <br/>
각 컴포넌트에 쓰이는 이미지, 텍스트 등은 props로 받아 언제든지 값을 변경할 수 있도록 설계했습니다.

```tsx
// AwardItem Component 사용예시
<AwardItem
  organizationText="2018 구글 플레이스토어"
  awardText="올해의 앱 최우수상 수상"
  awardImage={playStoreBadge}
/>
```

```tsx
// MetricItem Component 사용예시
<MetricItem
  countUpAnimation={{ startAt: 0, endAt: 700, duration: 2000 }}
  unitText="만 명"
  planeText="의 여행자"
/>
```

optional이 아닌 필수로 받아야 하는 props의 경우, defaultProps를 정의함으로써 값이 들어오지 않을 때의 오류를 방지했습니다.

<br/><br/>

## ◼ Convention

### Commit Convention

- [유다시티의 커밋 메세지 스타일 가이드](https://udacity.github.io/git-styleguide/)
- Commit Type만 영어로 작성합니다.

```
Feat: 새로운 기능 추가
Fix: 버그 수정
Docs: 문서 수정
Style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
Refactor: 코드 리팩토링
Test: 테스트 코드, 리팩토링 테스트 코드 추가
Chore: 빌드 업무 수정
```

<br/>

### Style Order

1. 레이아웃 (display, visibility, overflow, float, clear, position, top, right, bottom, left, z-index)
2. Box (Width, height, margin, padding, border)
3. 폰트 (font. color, letter-spacing, text-align, text-decoration, text-indent, vertical-align, white-space)
4. 배경 (background)
5. 기타
