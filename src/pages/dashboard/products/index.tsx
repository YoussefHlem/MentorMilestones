import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import List from "@/components/utils/List";

// const List = dynamic(() => import("@/components/utils/List"), {
//   ssr: false,
//   loading: () => <h1>Loading ...</h1>,
// });

import { getProducts } from "@/apis/products";
import DashboardLayout from "../layout";
import TableItem from "@/components/TableItem";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  creationAt: string;
  updatedAt: string;
}

export default function Products({ data }: { data: Product[] }) {
  return (
    <Container>
      <Header>
        <ProductSearch placeholder="Search Products..." />
        <AddProductButton>
          <Link href="/dashboard/products/create">Add Product +</Link>
        </AddProductButton>
      </Header>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Created At</TableHeaderCell>
            <TableHeaderCell>Updated At</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <List data={data} renderItem={(item) => <TableItem item={item} />} />
        </TableBody>
      </Table>
    </Container>
  );
}

export async function getServerSideProps() {
  const response = getProducts();
  return {
    props: response,
  };
}

Products.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductSearch = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddProductButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: #343a40;
  color: white;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
