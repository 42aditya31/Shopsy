// src/components/Category/Category.jsx
import React from 'react';
import categoryImage from '../../assets/category/earphone.png'; 
import speakerImage from '../../assets/category/speaker.png'
import gamingImage from '../../assets/category/gaming.png'
import macbookImage from '../../assets/category/macbook.png'
import vrImage from '../../assets/category/vr.png'
import watch from '../../assets/category/watch.png'

const Category = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* first col */}
          <div className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-black/10 to-black/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-grey-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2  '>Earphone</p>
                <button
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}
                />
              </div>
            </div>
            <img src={gamingImage} alt='' className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'  />
          </div>
          
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2  '>Speaker</p>
                <button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img src={watch} alt='' className='w-[320px] absolute -right-4 lg:top-[40px]' />
          </div>
          {/* third col */}
          <div className="  py-10 pl-5 bg-gradient-to-br from-brandPurple to-brandPurple/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div >
              <div className="mb-4 space-y-3 ">
                <p className=' text-white'>Enjoy</p>
                <p className='text-2xl font-semibold  '>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40  '>laptop</p>
                <button
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={macbookImage} alt='' className='w-[320px] absolute bottom-0'/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Category;
