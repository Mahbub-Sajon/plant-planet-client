import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>1. Question: Difference between javascript and nodejs.</h2>
            <p>Answer: Javascript is a programming language that is used for the client side activity. To make a site dynamic, for validation and etc we use javascript. We need engines like v8 and some other engines to run the javascript. It can be run in any browser. 
                whereas, Nodejs is a running environment of javascript language. Nodejs is used for in server side activity using javascript itself. Basically nodejs is a nice way to use javascript in the backend. Node js run only using v8 engine. 
                <h2>2. Differences between sql and nosql database.</h2>
                <p>Answer: The full form of SQL is structured query language and NoSQL means no structured query language. SQL is RDBMS which means they are relational and NoSQL is not RDBMS means non-relational. In SQL we need work with table but in NoSQL we can work with JSON data. SQL is for multi-row-transactions and NoSQL are JSON. </p>
            </p>
            <h2>Question: 3. What is the purpose of jwt and how does it work?</h2>
            <p>Answer: Full form of JWT is json web token. json is basically javascript object notation and token is some kind of data which is basically an identity. Jwt basically needed when a user try to login. Server wants to make sure that the client is authentic that is why server sends a token to the client side to verify the user. Client sends the exact token which is a copy actually to the server. Then the server checks if the client is authentic or not. And then server sends its response to client. This is how jwt works.</p>
        </div>
    );
};

export default Blogs;