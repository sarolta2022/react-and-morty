import React, { useEffect, useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import { characters } from "../App";
import { useCharacters, useLocations } from "../api/useData";

test("title renders succesfully", () => {
  const { container } = render(<App />);
  expect(container).toBeVisible();
});
test("show locations :", async () => {
  const { container } = render(<App />);
  const button = screen.getByText("Character");
  fireEvent.click(button);
  expect(container.getElementsByClassName("card").length).toBe(1);
});
