import { Github, Linkedin, Mail, Send } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

  const [result, setResult] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    
    const formData = new FormData(event.target);

    formData.append("access_key", "df92a4b3-e6b1-408d-9a7f-2d104c944203");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if(data.success){
      setResult('Form Submitted Successfully!');
      event.target.reset();
    }
    else{
      console.log("Error", data);
      setResult(data.message);
    };
  };


  return (       
    <section id='contact' className='w-full flex items-center justify-center dark:from-black dark:to-black dark:bg-linear-to-r px-4 md:px-6 py-20'>
      <div className='max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-10'>
        
        <div className='w-full'>
          <form className='w-full flex flex-col justify-center border-2 dark:border-white  px-5 py-6 rounded-3xl mt-10' onSubmit={onSubmitHandler}> 
            <input type="text" name='fullname' placeholder='Enter Your Name' className='w-full px-10 md:px-6 py-2 md:py-4 border-2 dark:border-white dark:placeholder-gray-500 rounded-2xl mt-3' required />
            <input type="email" name='email' placeholder='Email address' className='w-full px-10 md:px-6 py-2 md:py-4 border-2 dark:border-white dark:placeholder-gray-500 rounded-2xl mt-3' required />
            <input type="tel" name='phone' placeholder='Contact number' className='w-full px-10 md:px-6 py-2 md:py-4 border-2 dark:border-white dark:placeholder-gray-500 rounded-2xl mt-3' required />
            <textarea type="text" rows='4' placeholder='Message' className='w-full px-10 md:px-6 py-2 md:py-4 border-2 dark:border-white dark:placeholder-gray-500 rounded-2xl mt-10 ' required />
            {/* <div className='w-full mt-8'> */}
              <button className='w-full md:w-fit mt-8 flex items-center justify-center gap-2 bg-linear-to-r from-[#0c0295] to-[#3765aa] px-4 py-3 rounded-xl text-white' type='submit'>Send Message <Send width={17}/></button>
            {/* </div> */}
          </form>
        </div>

        <div className='w-full'> 
          <p className='text-5xl underline-half font-bold dark:text-white'>Get In Touch</p>
          <p className='mt-4 text-gray-500'>Feel free to reach out of collaborations or just friendly hello!</p>
          <div>
            <div className='w-full mt-7'>
              <a className='flex gap-4 mt-2 font-medium dark:text-white' href='https://www.linkedin.com/in/akilandeshwari-v' target='_blank'><Linkedin />akilandeshari-v</a>
              <a className='flex gap-4 mt-2 font-medium dark:text-white' href='mailto:akilavenkatraj2001@gmail.com' target='_blank'><Mail />akilavenkatraj2001@gmail.com</a>
              <a className='flex gap-4 mt-2 font-medium dark:text-white' href='https://github.com/Akiiila11' target='_blank'><Github />Akiiila11</a> 
            </div>
          </div>
        </div>
       
{/* formData.append("access_key", "df92a4b3-e6b1-408d-9a7f-2d104c944203"); */}
       
      </div> 
    </section>
  )
}

export default Contact
