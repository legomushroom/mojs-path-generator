import React from "react";
import MojsPathGenerator, {
  MojsPathGenerator as NamedGenerator
} from "./index";
import renderer from "react-test-renderer";

test("Component should mount", () => {
  const component = renderer.create(<MojsPathGenerator options={{ a: 1 }} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Named component should mount", () => {
  const component = renderer.create(<NamedGenerator options={{ a: 1 }} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
