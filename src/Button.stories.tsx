import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { useState } from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click me",
    onClick: () => alert("Clicked")
  }
};

const SecondaryButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleClick = () => {
    setIsDisabled(true);
    
    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
  };
  
  return (
    <div>
      <Button 
        label={isDisabled ? "Processing..." : "Click me"} 
        onClick={handleClick} 
        disabled={isDisabled}
        variant="secondary"
      />
      {isDisabled && <p>Try again in 5 seconds...</p>}
    </div>
  );
};

export const Secondary: Story = {
  render: () => <SecondaryButton />
};