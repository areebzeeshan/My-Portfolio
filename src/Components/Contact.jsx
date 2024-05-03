import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const Form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_leoz7sd',
            'template_2dsgssl',
            Form.current,
            'J5U1_sVj-whGIC_0a'
        )
        .then(
            () => {
              alert('Message successfully sent!')
            },
            () => {
              alert('Failed to send message, please try again!')
            }
          );
    };

    return (
        <div className='text-white'>
            <h1 className='font-bold text-5xl mb-10 text-center'>Contact <span className='text-[#00A1E4]'>Me</span></h1>

            <form ref={Form} onSubmit={sendEmail}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <div>
                        <input type="text" name='from_name' className='p-3 w-full bg-transparent border rounded border-[#00A1E4]' 
                        placeholder='Full Name' required />
                    </div>
                    <div>
                        <input type="email" name='user_email' className='p-3 w-full bg-transparent border rounded border-[#00A1E4]' 
                        placeholder='Email Address' required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <div>
                        <input type="text" className='p-3 w-full bg-transparent border rounded border-[#00A1E4]' 
                        placeholder='Mobile Number' required />
                    </div>
                    <div>
                        <input type="text" name='user_subject' className='p-3 w-full bg-transparent border rounded border-[#00A1E4]' 
                        placeholder='Email Subject' required />
                    </div>
                </div>

                <div className='mb-4'>
                    <textarea style={{ height: "250px" }} type="text" name='message' className='p-3 w-full bg-transparent border rounded border-[#00A1E4]'
                        placeholder='Your Message' required />
                </div>

                <div className="grid gap-3 md:flex md:space-x-2 mb-4 md:justify-center">
                    <button onSubmit={sendEmail} type='submit' className="bg-[#00A1E4] hover:bg-transparent hover:text-[#00A1E4] hover:outline text-white font-bold py-2 px-4 rounded transition">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact