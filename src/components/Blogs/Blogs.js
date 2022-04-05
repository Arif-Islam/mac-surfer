import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        // QnA Section
        <div>
            <div className='text-center w-11/12 lg:w-9/12 2xl:w-2/3 mx-auto my-12'>
                <div>
                    <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans'>What is Context API and what is the purpose of it?</h1>
                    <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>In our project, very often we need to pass props from grandparent to parent to child components and this props passing can be very inefficient if we pass props manually in every component. To solve this prop drilling issue, The Context API is widely used. Context API is a React structure that lets us share unique details and helps us solve prop drilling problems at various levels of our project. Context API gives us a way to create global variables that can be shared among other components. The purpose of the context API is to let us to make data available to all components in the component tree, regardless of how deeply nested they are. createContext() is all we need to create a context API and it gives us a provider and a consumer of the some particular data.
                    </p>
                </div>
                <div>
                    <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans'>What is Semantic Tag?</h1>
                    <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>The purpose of the HTML element is clearly defined by semantic tags. It also specifies the sort of content that should be included in the element. header, footer, article, nav, section for example, are called semantic elements since they explicitly state their purpose and the type of content they should contain. Semantic tags help us to structure the document in a meaningful way. Semantic tags also help search engines in effectively processing the webpage and locating accurate information. As a result, search engines will be able to properly index the page. Semantic tags make it much easier to read the code. They also provide a more better user experience.</p>
                </div>
                <div>
                    <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans'>Inline VS Block VS Inline Block Element</h1>
                    <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>Inline, block, and inline-block are CSS display properties. When we display items 'inline', their specific Height and Width do not affect how they appear. When items are displayed 'inline-block', they will appear in the same line, with their own Height and Width. The display items 'block' specifies that each item will take up the entire width of the page and start on a new line.
                    </p>
                </div>

            </div>
            <div className='static md:fixed bottom-0 left-0 right-0'>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Blogs;