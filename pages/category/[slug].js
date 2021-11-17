import React from 'react';
import {getCategories, getCategoriesDetails, getCategory} from '../../services';
import {Categories, Loader, PostCard} from '../../components';
import {useRouter} from "next/router";
import Head from "next/head";

const CategoryPostDetails = ({post, category}) => {

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
                      content="This is a custom made personal blogging site with react, nodejs and GraphQL"/>
                <meta name="keywords"
                      content={`Blog, Ashish Kumar Bhoi, Nextjs, GraphQL, GraphCMS , node, react, ${category.name}`}/>
                <title>{category.name} | Personal Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {post.length > 0 && (
                        <div className="lg:col-span-8 col-span-1">
                            {post.map((post) => <PostCard post={post} key={post}/>)}
                        </div>
                    )}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPostDetails;

// Fetch data at build time
export async function getStaticProps({params}) {
    const data = await getCategoriesDetails(params.slug)
    const category = await getCategory(params.slug)

    return {
        props: {
            post: data,
            category: category
        }
    }
}

export async function getStaticPaths() {
    const category = await getCategories();

    return {
        paths: category.map((slug) => ({params: slug})),
        fallback: true,
    };
}