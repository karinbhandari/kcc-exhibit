import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

const PageNotFound = () => (
    <>
    <div className="page-not-found">
        <img src='/static/images/404.gif' alt="404" width="auto" height="60%" />
        <h1>Look's like you're lost.</h1>
        <h2>Click this button to go back to home!</h2>
        <Link href="/"><a><Button variant="contained" color="primary">Go Home</Button></a></Link>
    </div>
    <style jsx>{`
    .page-not-found{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        background: #ffffff;
    }    
    `}</style>
    </>
);

export default PageNotFound;