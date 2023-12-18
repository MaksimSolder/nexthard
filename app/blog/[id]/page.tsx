import React from 'react';

type BlogFindByIdProps = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

export function generateMetadata({params: {id}}: BlogFindByIdProps) {
    return {
        title: id,
    }
}
const BlogFindById = async ({params: {id}}: BlogFindByIdProps) => {
    const post = await getData(id);
    return (
        <div>
            <h1>{post.title}</h1>
            <div className="bg-gray-100 p-2">{post.body}</div>
        </div>
    );
};

export default BlogFindById;