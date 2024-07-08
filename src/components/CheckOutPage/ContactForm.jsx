import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import Input from '../../components/Input';
import SelectCountry from '../../components/Country';


export default function ContactForm () {
    return (
        
            <div>
              <FormControl className='text-fg-text-black'>
                <RadioGroup
                  aria-labelledby='contact-radio-buttons-group-label'
                  defaultValue='Use your profile detail as contact'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='Use your profile detail as contact'
                    control={<Radio />}
                    label='Use your profile detail as contact'
                  />
                  <FormControlLabel
                    value='Use new profile as contact'
                    control={<Radio />}
                    label='Use new profile as contact'
                  />
                </RadioGroup>
              </FormControl>
              <div className='mt-8 mb-4 gap-4'>
                <Input
                  text='text'
                  inputName='Full Name'
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your Full Name'
                />
          
                <Input
                  text='text'
                  inputName='Email'
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  variant='outlined'
                  placeholder='Enter your Email'
                />
                <Input
                  text='text'
                  inputName='Retype Email'
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Retype your Email'
                />
          
                <Input
                  type='text'
                  inputName='Phone Number'
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your Phone Number'
                />
                <SelectCountry width={480} />
              </div>
            </div>
          
    )
}