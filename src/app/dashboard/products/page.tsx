// @ts-nocheck
"use client";
import { productApi } from "@/apis/products";
import { ClothesFactory } from "@/apis/products/clothes";
import List from "@/components/utils/List";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { truncate } from "@/utils/truncate";

export default function Products() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await productApi(new ClothesFactory()).getAllProducts();
    setData(data);
  };

  const handleDeleteProduct = async (productId: string) => {
    await productApi(new ClothesFactory()).deleteProduct(productId);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <List
            data={data}
            renderItem={(item) => (
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{truncate(item.title, 20)}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{truncate(item.description, 50)}</TableCell>
                <TableCell>{item.creationAt}</TableCell>
                <TableCell>{item.updatedAt}</TableCell>
                <TableCell>{item.category.name}</TableCell>
                <TableCell>
                  <ActionButton>
                    <Link href={`/dashboard/products/${item.id}`}>Edit</Link>
                  </ActionButton>
                  <DeleteButton onClick={() => handleDeleteProduct(String(item.id))}>
                    Delete
                  </DeleteButton>
                </TableCell>
              </TableRow>
            )}
          />
        </TableBody>
      </Table>
    </Container>
  );
}

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
