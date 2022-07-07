import Logo from '.'

export default {
  title: 'Component/Logo',
  component: Logo,
  argTypes: {
    text: { control: 'text' },
    fadeInDuration: { control: 'number' },
    fadeInDelay: { control: 'number' },
  },
}

export const Default = (args: object) => {
  return <Logo text="2021년 12월 기준" {...args} />
}
