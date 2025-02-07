import React from 'react'
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput ,Textarea} from "flowbite-react";
import { Select } from 'flowbite-react';


const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL} =useLoaderData()
  
  const bookCategories=[
      "Fiction",
      "Non-Fiction",
      "History",
      "Programming",
      "Science Fiction",
      "Fantasy",
      "Horror",
      "Bibliography",
      "Autobiography",
      "Mistery",
      "Self-Help",
      "Memoir",
      "Bussiness",
      "Children Books",
      "Travel",
      "Religion",
      "Art and Design"
  
    ]
  
    const [selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0]);
  
    const handleChangeSelectiveValue=(event)=>{
      console.log(event.target.value);
      setSelectedBookCategory(event.target.value);
  
    }
  
    const handleUpdate=(event) =>{
      event.preventDefault();
      const form= event.target;
  
      const bookTitle=form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageUrl= form.imageURL.value;
      const category = form.bookCategories.value;
      const bookDescription=form.bookDescription.value;
      const bookPDFURL=form.bookPDFURL.value;
  
      const updateBookObj={
        bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL
      }
  
      // console.log(bookObj)

      fetch(`http://localhost:5000/book/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data=>{
        alert("Book is updated successfully!!")
      })
      
    }
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
  
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
  
          {/* first Row */}
  
          <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" type="text" placeholder="Book name" required  defaultValue={bookTitle}/>
        </div>
  
        {/* Author Name */}
  
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" type="text" placeholder="Author name" required defaultValue={authorName}/>
        </div>
        </div>
  
        {/* 2nd Row */}
  
  
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageUrl" value="Book Image Url" />
          </div>
          <TextInput id="imageUrl" type="text" placeholder="Image Url name" required defaultValue={imageUrl}/>
        </div>
  
        {/* Category Name */}
  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
  
          <Select id="inputState" name="categoryName" className="w-full rounded " value={selectedBookCategory}
          onChange={handleChangeSelectiveValue}>
            {bookCategories.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
  
          </Select>
        </div>
        </div>
  
        {/* bookDescription */}
  
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" placeholder="Write your book description..." required rows={6} className='w-full' defaultValue={bookDescription}/>
        </div>
  
        {/* Book Pdf link */}
  
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" required defaultValue={bookPDFURL} />
        </div>
  <Button type="submit" className='bg-blue-900 justify-center mt-5'>Update Book</Button>
        
  
      </form>
      </div>
    )

}

export default EditBooks