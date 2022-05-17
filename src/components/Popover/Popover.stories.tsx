import React, { ReactElement, useRef, useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, Popover } from "../../components";

export default {
  title: "Design System/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Popover to render children next to a defined reference HTMLButtonElement",
      },
    },
  },
} as ComponentMeta<typeof Popover>;

export const Example = (): ReactElement => {
  const [visible, setVisible] = useState(false);

  const referenceRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button
        ref={referenceRef}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        toggle
      </Button>

      <Popover
        {...{ referenceRef, visible }}
        popperOptions={{
          placement: "right-start",
          modifiers: [
            {
              name: "offset",
              enabled: true,
              options: {
                offset: [0, 16],
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom"],
              },
            },
          ],
        }}
      >
        <div
          style={{
            maxWidth: 800,
          }}
        >
          Duis dignissim lectus et erat convallis dictum. Pellentesque aliquet a tellus ut posuere.
          Aenean risus ipsum, tristique ac imperdiet non, sagittis vitae turpis. Nulla varius
          consectetur sapien non porttitor. Sed ullamcorper felis eleifend blandit consequat.
          Praesent fermentum lacus nec mollis dapibus. Donec nec lectus a tellus blandit porttitor.
          Suspendisse ultrices viverra metus, at sagittis elit sollicitudin vel. Nullam eu enim
          ultrices libero iaculis sagittis. In congue volutpat leo, eget feugiat metus scelerisque
          ac. Etiam eget mi ac diam aliquet posuere nec vitae sapien. Phasellus vitae odio a leo
          lobortis dignissim. Praesent tempus mauris at sem eleifend mollis. Donec vitae leo
          sagittis nisi varius ultricies eu vitae tellus.
        </div>
      </Popover>
    </div>
  );
};
