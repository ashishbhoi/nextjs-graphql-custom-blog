import React from 'react';
import {getPostDetails, getPosts} from '../../services';
import {Author, Categories, Comments, CommentsForm, Loader, PostDetail, PostWidget} from '../../components';
import {useRouter} from "next/router";
import Head from "next/head";

const PostDetails = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader/>;
    }

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta name="author" content="Ashish Kumar Bhoi"/>
                <meta name="theme-color" content="#255adf"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="description"
                      content={post.excerpt}/>
                <meta name="keywords"
                      content="Blog, Ashish Kumar Bhoi, Nextjs, GraphQL, GraphCMS , node, react"/>
                <title>{post.title} | Personal Blog</title>
                <link rel="icon" href={`/favicon.ico`}/>
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post}/>
                    <Author author={post.author}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug)

    return {
        props: {
            post: data,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({node: {slug}}) => ({params: {slug}})),
        fallback: true,
    };
}