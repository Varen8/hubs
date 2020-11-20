import React from "react";
import { FullscreenLayout } from "./FullscreenLayout";
import { Column } from "./Column";
import { IconButton } from "../input/IconButton";
import { CloseButton } from "../input/CloseButton";

export default {
  title: "FullscreenLayout",
  parameters: {
    layout: "fullscreen"
  }
};

export const Base = () => (
  <FullscreenLayout
    headerLeft={<CloseButton lg />}
    headerCenter={<h4>Fullscreen Layout</h4>}
    headerRight={<IconButton lg>Button</IconButton>}
  >
    <Column padding>Content</Column>
  </FullscreenLayout>
);