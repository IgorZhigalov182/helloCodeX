# CodeX Button Component

The button component is shown below in the image, it is possible to change the configuration using inputs

## [Sandbox](https://hello-code-x.vercel.app/)

<img src="https://github.com/IgorZhigalov182/helloCodeX/assets/97223418/9de38ace-d837-410a-97ab-59558dbe7503" width="700" height="350">

## Properties

Button component accepts the following props:

|Props|Value|
|---| ---|
|size| small - medium - large |
|style| solid - outline - soft - ghost |
|color| primary - secondary - danger |
|handler | function triggered by pressing a button |
|title | title inside button |
|state| default - disabled |

## Example

Example of a button whose properties change adaptively depending on the theme:

```javaScript
<Button
  iconType="noIcon"
  size="medium"
  style={theme === 'dark' ? 'solid' : 'outline'}
  color="secondary"
  handler={handleSwitchMode}
  title={theme === 'dark' ? 'light' : 'dark'}
  state="default"
/>
```

## Install

```javaScript
cd helloCodeX
npm install
yarn dev
```
