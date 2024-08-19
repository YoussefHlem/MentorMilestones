// @ts-nocheck
"use client";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DashboardLayout from "../../layout";
import { deleteProduct, getProduct, getProducts, updateProduct } from "@/apis/products";

type EVENT = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  creationAt: string;
  updatedAt: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    creationAt: new Date(product.creationAt).toLocaleDateString(),
    updatedAt: new Date(product.updatedAt).toLocaleDateString(),
  });

  const handleInputChange = (e: EVENT) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProduct = async (e: EVENT) => {
    e.preventDefault();
    await updateProduct(product.id, formData);
    router.back();
  };

  const handleDeleteProduct = async (e: EVENT) => {
    e.preventDefault();
    await deleteProduct(product.id);
    router.back();
  };

  return (
    <FormContainer>
      <FormTitle>Product Details</FormTitle>
      <Form>
        <FormField>
          <Label htmlFor="title">Product Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="category">Category</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="creationAt">Created At</Label>
          <Input
            type="text"
            id="creationAt"
            name="creationAt"
            value={formData.creationAt}
            readOnly
          />
        </FormField>
        <FormField>
          <Label htmlFor="updatedAt">Updated At</Label>
          <Input type="text" id="updatedAt" name="updatedAt" value={formData.updatedAt} readOnly />
        </FormField>
        <Actions>
          <ActionButton onClick={handleSaveProduct}>Save</ActionButton>
          <DeleteButton onClick={handleDeleteProduct}>Delete</DeleteButton>
        </Actions>
      </Form>
    </FormContainer>
  );
}

export const getStaticPaths = async () => {
  const { data } = await getProducts();

  const paths = data.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }: { params: { id: string }[] }) => {
  const id = params?.id as string;
  const { data: product } = await getProduct(id);

  return {
    props: {
      product,
    },
  };
};

ProductDetails.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #343a40;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #343a40;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e9ecef;
  color: #495057;
  &:read-only {
    background-color: #e9ecef;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e9ecef;
  color: #495057;
  resize: vertical;
  &:read-only {
    background-color: #e9ecef;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e9ecef;
  color: #495057;
  &:read-only {
    background-color: #e9ecef;
  }
`;

const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #007bff;

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
