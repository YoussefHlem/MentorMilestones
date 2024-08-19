"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import DashboardLayout from "../layout";
import { createProduct } from "@/apis/products";
import { useRouter } from "next/navigation";
import { notification } from "@/models/notifications";

type EVENT = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
interface FormData {
  title: string;
  price: number;
  description: string;
  category: string;
}

export default function Create() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: 0,
    description: "",
    category: "",
  });

  const handleChange = (e: EVENT) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success } = await createProduct(formData);
    if (success) {
      notification(success, "Product created successfully");
      setFormData({
        title: "",
        price: 0,
        description: "",
        category: "",
      });
      router.back();
    }
    notification(success, "Error creating product");
  };

  return (
    <FormContainer>
      <FormTitle>Create New Product</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="title">Product Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="category">Category</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </Select>
        </FormField>
        <SubmitButton type="submit">Create Product</SubmitButton>
      </Form>
    </FormContainer>
  );
}

Create.getLayout = function getLayout(page: React.ReactElement) {
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
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
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
