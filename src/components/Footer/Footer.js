import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h1>Interview Question About React !!</h1>
            <div>
                <h2>How does React works ?</h2>
                <p><strong>Answer : </strong>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.

                    Whenever there is any change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.</p>
            </div>
            <div>
                <h2>What is the difference between props and state ?</h2>
                <p><strong>Answer :</strong>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h2>What does useEffect do other than load data by api call ?</h2>
                <p><strong>Answer : </strong> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Footer;