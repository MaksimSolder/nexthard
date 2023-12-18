import React from 'react';
import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) {
        throw new Error(`Not found ${response.url}`);
    }
    return response.json();
}
const Page = async () => {
    const posts = await getData();
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post:any, index:number) => (
                    <li key={index}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;