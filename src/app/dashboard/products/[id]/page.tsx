// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { productApi } from "@/apis/products";
import { ClothesFactory } from "@/apis/products/clothes";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  creationAt: string;
  updatedAt: string;
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = params;

  function handleDelete(e, productId: string) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this product?")) {
      productApi(new ClothesFactory()).deleteProduct(productId);
    }
  }

  const fetchData = async () => {
    if (id) {
      const { data } = await productApi(new ClothesFactory()).getProduct(id);
      setProduct(data);
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    productApi(new ClothesFactory()).editProduct(product.id, product);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!product) return <Error>Product not found</Error>;

  return (
    <FormContainer>
      <FormTitle>Product Details</FormTitle>
      <Form>
        <FormField>
          <Label htmlFor="title">Product Title</Label>
          <Input type="text" id="title" name="title" value={product.title} readOnly />
        </FormField>
        <FormField>
          <Label htmlFor="price">Price</Label>
          <Input type="number" id="price" name="price" value={product.price} readOnly />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={product.description} readOnly />
        </FormField>
        <FormField>
          <Label htmlFor="category">Category</Label>
          <Select id="category" name="category" value={product.category}>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            {/* Add more categories if needed */}
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="creationAt">Created At</Label>
          <Input
            type="text"
            id="creationAt"
            name="creationAt"
            value={new Date(product.creationAt).toLocaleDateString()}
            readOnly
          />
        </FormField>
        <FormField>
          <Label htmlFor="updatedAt">Updated At</Label>
          <Input
            type="text"
            id="updatedAt"
            name="updatedAt"
            value={new Date(product.updatedAt).toLocaleDateString()}
            readOnly
          />
        </FormField>
        <Actions>
          <ActionButton onClick={(e) => handleSaveProduct(e)}>Save</ActionButton>
          <DeleteButton onClick={(e) => handleDelete(e, String(product?.id))}>Delete</DeleteButton>
        </Actions>
      </Form>
    </FormContainer>
  );
}

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

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: #007bff;
`;

const Error = styled.div`
  text-align: center;
  font-size: 18px;
  color: #dc3545;
`;
