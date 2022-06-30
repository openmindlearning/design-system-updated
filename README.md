# Studio Design System

Studio's Design System, built to help us work together in creating an excellent user experience. The design system is our toolkit and building blocks for building the platform where everyone can connect with their creativity.

## Usage

1. Import package

```
yarn add @openmindlearning/design-system
```

2. Use `ThemeProvider` or `ThemeWrapper` as a container component

```
<ThemeProvider>
  <MyApp/>
</ThemeProvider>
```

```
<ThemeWrapper theme={ThemeType.light}>
  <MyApp/>
</ThemeWrapper>
```

3. Import the prebuilt Vanilla Extract CSS file in your top level app

```
import "@openmindlearning/design-system/dist/style.css";
```

or in a `global.css` file:

```
@import "@openmindlearning/design-system/dist/style.css";
```

## About this package

`@studio/design-system` is developed to be agnostic to our platform and is intended for creating components that act as building blocks for both our applications, but also any other application or feature we could imagine.

The package is set up using a [_barrel export pattern_](https://basarat.gitbook.io/typescript/main-1/barrel) such that users can import anything directly from `@studio/design-system` without having to specify a path (i.e. `import { theme, Button } from '@studio/design-system'`).

The package is structured as follows:

```
@studio/design-system/src
├── docs          # Documentation for working with the package
├── components    # Our component library
├── hooks         # Reusable Hooks
├── icons         # SVG Icons
├── themes        # Our theme composed of CSS variables that should be used to style components
├── util          # Utility functions
└── tokens        # Raw values that compose our theme
```

### Components:

Our component library consists of generic components that serve common use cases for features in our platform. Components are intentionally free of business logic and are designed to be extendable enough such that they can accommodate many different feature needs. Most components in the component library are built based on a collection of [desktop component designs](https://www.figma.com/file/TC9JV34o6XGdzQGXIHxB32/Desktop-Components?node-id=2574%3A1745) created by our Design team.

Component specific documentation and visual reference can be found in storybook (instructions on running storybook can be found in the **Commands** section). Component stories include a breakdown of style variations that are implicit to any component, in addition to the component's prop interface.

If you would like to contribute a component to the design system, please refer to the `Contribution Guidelines` documentation in Storybook which also includes PR creation guidelines.

### Theme:

Our theme is composed of:

- border styles
- breakpoints
- colors
- fonts & typography styles
- shadows (box shadows & text shadows)
- spacing

The theme is strongly typed to provide code completion and prevent css compilation, and usage errors.

## Commands

Installing dependencies locally:

```
yarn
```

Running storybook:

```
yarn storybook
```

## Key Dependencies

- React (v. )

- Vanilla Extract CSS
  Our css in JS library that allows for type safe CSS variable generation. We use Vanilla Extract to create css variables in our theme to provide the convenience of semantic

- Storybook
  Storybook is a visual reference and rapid prototyping tool. Our guidelines for writing stories can be found in the Contribution Guidelines.

- Vite
  The design system's build tool. Vite builds storybook and provides a local port for accessing storybook

## Frequently Asked Questions

- How should I import the theme?
  `import { theme } from "@studio/design-system"`

- How does the theme get applied to my components?
  The theme is provided by the `ThemeProvider` which exposes the theme to all children of the provider. If you are creating a component that breaks out of the scope of the `ThemeProvider` (i.e. a portal) you can use the `ThemeWrapper` to wrap your component and extend the theme to your component.

  ```
    import {ThemeWrapper} "@studio/design-system"
    import * as styles from "@vanilla-extract/css"

    export function MyComponent(){

      return (
        <ThemeWrapper>
          <div>Hello World </div>
        </ThemeWrapper>
      )
    }
  ```

## Contributing

If you would like to contribute to the design system, please checkout our Contribution Guidelines page in storybook
