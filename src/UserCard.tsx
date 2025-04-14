 import React from "react";

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
    return (
        <div style={{border: '1px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};