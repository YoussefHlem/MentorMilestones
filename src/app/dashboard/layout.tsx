"use client";
import Sidebar from "@/components/Sidebar";
import styled from "styled-components";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Content = styled.div`
  flex: 1;
`;
