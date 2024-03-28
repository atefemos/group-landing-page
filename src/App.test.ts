import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const settingBtnElement = screen.getByText(/setting/i)
  const categoryBtnElement = screen.getByText(/categories/i)
  expect(settingBtnElement).toBeInTheDocument()
  expect(categoryBtnElement).toBeInTheDocument()
})
