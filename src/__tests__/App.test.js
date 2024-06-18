import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // for toBeInTheDocument matcher
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

// Test for Image
test("displays an image of yourself with alt text", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText("I made this");
  
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://i.imgur.com/mV8PQxj.gif");
  });

  
  // Test for second Heading

  test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });

  // Test or Biography Paragraph
  test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const biography = screen.getByText(/your biography here/i);
  
    // Assert
    expect(biography).toBeInTheDocument();
  });

  
  // Test for links
  test("displays a link to your GitHub page", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
  });
  
  test("displays a link to your LinkedIn page", () => {
    // Arrange
    render(<App />);
  
    // Act
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });

  
  
