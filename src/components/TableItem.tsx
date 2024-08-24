import { deleteProduct } from "@/apis/products";
import { truncate } from "@/utils/truncate";
import styled from "styled-components";
import Link from "next/link";

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

const TableItem = ({ item }: { item: Product }) => {
  const handleDeleteProduct = async (productId: string) => {
    deleteProduct(productId);
  };
  return (
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
        <DeleteButton onClick={() => handleDeleteProduct(String(item.id))}>Delete</DeleteButton>
      </TableCell>
    </TableRow>
  );
};
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
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
export default TableItem;
