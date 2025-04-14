 import React, { useState } from "react";
import { Button } from "./Button";

type UserCardProps = {
  name: string;
  email: string;
};

/**
 * UserCard component
 * @param name - The name of the user
 * @param email - The email of the user
 * @returns 
 */

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfirmed(true);
    };
    
    return (
        <div >
            <h3>{name}</h3>
            <p>{email}</p>
            <Button label="Confirm" onClick={handleConfirm} variant="secondary" />
            {isConfirmed && <p>User Confirmed</p>}
        </div>
    );
};