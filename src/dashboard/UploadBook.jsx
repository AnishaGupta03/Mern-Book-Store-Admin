import React , {useState} from 'react'
import { Select } from 'flowbite-react';
import { Button, Checkbox, Label, TextInput ,Textarea} from "flowbite-react";

const UploadBook = () => {
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

  const handleChangeSelectedValue=(event)=>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);

  }

  const handleBookSubmit=(event) =>{
    event.preventDefault();
    const form= event.target;

    const bookTitle=form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl= form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const bookObj={
      bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL
    }

    console.log(bookObj)

    //send data to db

    fetch("http://localhost:5000/upload-book", {
      method:"POST",
      headers: {
        "Content-type" : "application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res => res.json()).then(data=>{
      alert("Book Uploaded Successfully!!");
      form.reset();
    })
    
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first Row */}

        <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" placeholder="Book name" required />
      </div>

      {/* Author Name */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" placeholder="Author name" required />
      </div>
      </div>

      {/* 2nd Row */}


      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book Image Url" />
        </div>
        <TextInput id="imageUrl" type="text" placeholder="Image Url name" required />
      </div>

      {/* Category Name */}

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id="inputState" name="categoryName" className="w-full rounded " value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {bookCategories.map((option) => 
        <option key={option} value={option}>
          {option}
        </option>
      )}

        </Select>
      </div>
      </div>

      {/* bookDescription */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" placeholder="Write your book description..." required rows={6} className='w-full'/>
      </div>

      {/* Book Pdf link */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" required />
      </div>
<Button type="submit" className='bg-blue-900 justify-center mt-5'>Upload Book</Button>
      

    </form>
    </div>
  )
}

export default UploadBook;