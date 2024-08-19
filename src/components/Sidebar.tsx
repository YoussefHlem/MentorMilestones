import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <SideBarContainer>
      <Title>Dashboard</Title>
      <List>
        <DropdownListItem onClick={toggleDropdown}>
          Products
          {isDropdownOpen && (
            <DropdownMenu>
              <Link href="/dashboard/products" passHref>
                <DropdownItem>List</DropdownItem>
              </Link>
              <Link href="/dashboard/products/create" passHref>
                <DropdownItem>Add</DropdownItem>
              </Link>
            </DropdownMenu>
          )}
        </DropdownListItem>
      </List>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 220px;
  padding: 20px;
  background-color: #343a40;
  min-height: 100vh;
  color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  background-color: #495057;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6c757d;
  }
`;

const DropdownListItem = styled(ListItem)`
  position: relative;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  background-color: #495057;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  background-color: #6c757d;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #868e96;
  }
`;

export default Sidebar;
