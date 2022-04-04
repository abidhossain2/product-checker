import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Context API</h3>
            <p>In the beginning we had to send data between multiple elements in the React as props. As a result, each component would receive props and re-send to another component as props. This is called props drilling. But data can be easily send across multiple elements using Context API. Context API create context and acts as provider among all the elements. As a result each component receives data.</p>

            <h3>Semantice Tag</h3>
            <p>
                With the help of semantic tags, the meaning of tags can be easily understood. We see some tags in HTML version 5. Such as header, articel, aside, footer. The specificity of their work could be understood by those tags. But in HTML version 4, these tags only worked with Div. As a result, the meaning of those tags could not be easily understood.
            </p>

            <h3>Inline vs Inline-block vs Block</h3>
            <p>
                <span style={{fontWeight: 'bold'}}>Inline:</span> <p>It displays element in same line. There are some tags which known as inline element. Such as span, img, a etc. We can not increase or decrease their height and width. It is not specific. </p>
                <span style={{fontWeight: 'bold'}}>Inline-block:</span> <p>It displays element in same line. But it acts like block element. Suppose span tag is inline element. But When we set its display property as inline-block. We change their height, width etc.</p>
                <span style={{fontWeight: 'bold'}}>Block:</span> <p>Block element takes the whole width of the screen. Div, h1, p etc are block elements. We can change their property such as height, width etc. </p>
            </p>
        </div>
    );
};

export default Blog;