import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";
import { JSX, ClassAttributes, ImgHTMLAttributes } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt={props.alt ?? "Image"} />
  ),
}));

describe("Home Component", () => {
  it("renders the sale banner", () => {
    render(<Home />);
    expect(screen.getByText(/FRESH BEGINNINGS SALE/i)).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    render(<Home />);
    fireEvent.click(screen.getByLabelText("Toggle menu"));
    expect(screen.getByTestId("mobile-about")).toBeInTheDocument();
    fireEvent.click(screen.getByText("✕"));
    expect(screen.queryByTestId("mobile-about")).not.toBeInTheDocument();
  });

  it("renders all feature items", () => {
    render(<Home />);
    const features = [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers",
    ];
    features.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders CTAs in correct containers', () => {
    const { container } = render(<Home />);
    const mainContent = container.querySelector('main');
    expect(mainContent).toContainElement(
      screen.getAllByText(/GET STARTED/i)[0]
    );
    expect(container.querySelector('.fixed.bottom-0')).toContainElement(
      screen.getAllByText(/GET STARTED/i)[1]
    );
  });
});
